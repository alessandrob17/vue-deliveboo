import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            dishes: [],
        };
    },
    mutations: {
        setDishes(state, dishes) {
            state.dishes = dishes;
        },
    },
    actions: {
        setDishes({ commit }, dishes) {
            commit('setDishes', dishes);
        },
    },
});

export default store;
