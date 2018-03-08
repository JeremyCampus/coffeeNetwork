import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Machinelist from "./vues/MachinesList.vue";
import Machinemap from "./vues/MachinesMap.vue";
import Machine from "./vues/Machine.vue";

Vue.use(VueRouter)






//
// const machinelist = { template: '<h2>test1</h2>' }
// const machinemap = { template: '<h2>test2</h2>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/machinelist', component: Machinelist },
  { path: '/machinemap', component: Machinemap },
  { path: '/machine', component: Machine }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App },
})
