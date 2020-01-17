import Vue from 'vue';
import app from './app.vue';
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './icons/index.js'
import './assets/general.css'
Vue.use(Element);
new Vue({
    router,
    store,
    render:h=>h(app)
}).$mount("#app")