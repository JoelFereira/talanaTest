import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import products from "./modules/products"
import cart from "./modules/cart"

const store =  new Vuex.Store({
    modules: {
        products: products,
        cart: cart
    },
    state: {
    },
    getters: {
    },
    actions: {
    },
    mutations: {
    }
})

export default store