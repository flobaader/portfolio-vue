import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

// @ts-ignore
import VueScrollactive from 'vue-scrollactive';

Vue.config.productionTip = false;

Vue.use(VueScrollactive);

new Vue({
    // @ts-ignore
    vuetify,
    render: h => h(App)
}).$mount('#app')
