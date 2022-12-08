import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    }
];
Vue.component('add-task', require('./components/AddTaskComponent.vue').default);
Vue.component('edit-task', require('./components/EditTaskComponent.vue').default);

import Home from './components/HomeComponent.vue';
import Task from './components/TaskComponent.vue';
//Vue.component('home-component', require('./components/HomeComponent.vue').default);

const routes = [
    {
        path: '/home',
        component: Home
    },

    {
   path: '/tasks',
        component: Task
    }


];