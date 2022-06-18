import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {

    total: state => {
      if (state.cart.length > 0) {
        return state.cart.map(item => item.price).reduce((total, price) => total + price)
      } else {
        return 0
      }
    }

  },
  mutations: {

    addToCart (state, product) {
      return state.cart.push(product)
    }

  },
  actions: {
  },
  modules: {
  }
})
