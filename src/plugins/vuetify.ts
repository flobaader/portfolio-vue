import Vue from 'vue';
// @ts-ignore
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#20c997',
                secondary: '#495057',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
        icons: {
            iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
        },
    },
});
