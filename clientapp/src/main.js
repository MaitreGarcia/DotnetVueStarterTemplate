import Vue from 'vue';

import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(axios);

axios.defaults.headers.common['Pragma'] = 'no-cache';
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
Vue.prototype.$http = axios;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
