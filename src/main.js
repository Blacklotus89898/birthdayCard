import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Card from './components/Card.vue'
import HelloWorld from './components/HelloWorld.vue'
import Selector from './components/Selector.vue'
import GridVue from './components/Grid.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/homie', component: HelloWorld },
        { path: '/home', component: App },
        { path: '/card', component: Card },
        { path: '/selector', component: Selector },
        { path: '/gg', component: GridVue },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');

