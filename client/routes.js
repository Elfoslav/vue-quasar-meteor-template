// Import the router
//import { RouterFactory } from 'meteor/akryum:vue-router2'
// Components
import Hello from '/imports/ui/components/Hello.vue'
import Info from '/imports/ui/components/Info.vue'

let routes = [
    {
        path: '/',
        name: 'home',
        component: Hello,
    },
    {
        path: '/info',
        name: 'info',
        component: Info,
    },
];

module.exports = {
    routes: routes,
};
