import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from 'vuex-persistedstate'

const loremIpsum = require('lorem-ipsum');

Vue.use(Vuex);

const state = {
    count: 1,
    type: 'words'
};

const getters = {
    generate(state) {
        return loremIpsum({
            count: state.count,
            units: state.type
        });
    }
};

const mutations = {
    updateCount(state, count) {
        state.count = count;
    },
    updateType(state, type) {
        state.type = type;
    },
    refresh(state) {
        let currentCount = state.count;
        state.count = 0;
        state.count = currentCount;
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    plugins: [
        createPersistedState({
            storage: localStorage
        })
    ]
});

export default store;
