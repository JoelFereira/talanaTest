import Axios from "axios"

const baseURL = "https://cors-anywhere.herokuapp.com/http://sva.talana.com:8000/api/"

const productsModule = {
    state: {
        categories: null,
        products: null,
        categoriesError: null,
        productsError: null
    },
    actions: {
        getAllCategories({commit}) {
            Axios.get(`${baseURL}product-category`)
            .then(
                r => {
                    commit('SET_CATEGORIES', r.data)
                    commit('SET_CATEGORIES_ERROR', null)
                }
            ).catch(
                e => {
                    commit('SET_CATEGORIES', null)
                    commit('SET_CATEGORIES_ERROR', e)
                }
            )
        },
        getAllProducts({commit}) {
            Axios.get(`${baseURL}product`).then(
                r => {
                    commit('SET_PRODUCTS', r.data)
                    commit('SET_PRODUCTS_ERROR', null)
                }
            ).catch(
                e => {
                    commit('SET_PRODUCTS', null)
                    commit('SET_PRODUCTS_ERROR', e)
                }
            )
        }
    },
    mutations: {
        SET_CATEGORIES (state, payload) {
            state.categories = payload
        },
        SET_CATEGORIES_ERROR (state, payload) {
            state.categoriesError = payload
        },
        SET_PRODUCTS (state, payload) {
            state.products = payload
        },
        SET_PRODUCTS_ERROR (state, payload) {
            state.productsError = payload
        }
    }
}

export default productsModule