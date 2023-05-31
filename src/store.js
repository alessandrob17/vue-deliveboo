import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            dishes: [],
        };
    },
    mutations: {
        setOrder(state, dishes) {
            state.dishes = dishes;
        },
    },
    actions: {
        setOrder({ commit }, dishes) {
            commit('setOrder', dishes);
        },
    },
});

export default store;
