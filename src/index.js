import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'

import styles from './styles.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
