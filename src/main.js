import Vue from 'vue'
import page from 'page'
import routes from './routes'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const app = new Vue({
    el: '#app',
    data: {
        ViewComponent: { render: h => h('div', 'loading...') },
    },
    render (h) { return h(this.ViewComponent) },
    http: {
        root: '/'
    }
});

Object.keys(routes).forEach(route => {
    const Component = require('./pages/' + routes[route] + '.vue');
    page(route, (ctx) => {
        app.ViewComponent = Component;
        window.blog_id = ctx.params.id;
    });
});

page('*', () => app.ViewComponent = require('./pages/404.vue'));
page();
