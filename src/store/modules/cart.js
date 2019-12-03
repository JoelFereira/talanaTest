const cartModule = {
    state: {
        cart: [],
    },
    mutations: {
        ADD_TO_CART (state, payload) {
            if (!state.cart.some(e => e == payload.id)) {
                payload.cant = 0
                state.cart.push(payload)
            }
        }
    }
}

export default cartModule