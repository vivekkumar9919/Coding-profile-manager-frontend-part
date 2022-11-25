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

// gurd code started here
var studentflag=false;
var teacherflag=false;
router.beforeEach((to,from,next)=>{ 
  //student auth 
  if(to.meta.studentgurd){ 
    studentflag=localStorage.getItem("student_flag"); 
    if(studentflag){ 
      next(); 
    }else{ 
      next('/login'); 
    }   
  }else{ 
    next(); 
  } 
//admin authentication 
if(to.meta.teachergurd){ 
  //  isadmin = localStorage.getItem("admin_status"); 
 
  if(teacherflag){ 
    next(); 
  }else{ 
    next('/login/teachersignup'); 
  }   
}else{ 
  next(); 
} 
 
})








new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
