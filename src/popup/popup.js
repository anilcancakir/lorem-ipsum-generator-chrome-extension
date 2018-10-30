import Vue from 'vue';
import store from './../store/index';

Vue.component('popup', require('./components/Popup.vue'));

new Vue({
    store,
    el: '#app'
});
