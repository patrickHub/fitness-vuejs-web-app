# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app

# copy file separatelly to take advantage of docker cached layers when building the project
COPY package*.json ./

# install project dependenciet
RUN npm install --force

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]