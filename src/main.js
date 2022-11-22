import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter);


const router=new VueRouter({
  mode:'history',
  routes
}
)
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
