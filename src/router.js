import HomePage from './components/HomePage.vue'
import MainPage from './components/MainPage.vue'
import CheckProfile from './components/CheckProfile.vue'
import SortlistProfile from './components/SortlistProfile.vue'
import LoginPage from './components/LoginPage.vue'

// login pages
import StudentsLogin from './components/login_pages/StudentsLogin.vue'
import StudentsSignup from './components/login_pages/StudentsSignup.vue'
import TeacherLogin from './components/login_pages/TeacherLogin.vue'
import TeacherSignup from './components/login_pages/TeacherSignup.vue'


//student
import StudentsMain from './components/students/StudentsMain.vue'
import StudentHome from './components/students/StudentHome.vue'
import AddFriend from './components/students/AddFriend'
import MakeTarget from './components/students/MakeTarget.vue'
import QuestionSolved from './components/students/QuestionSolved.vue'
import StudentsProfie from './components/students/StudentsProfie.vue'
// import QuestionSolved from './components/students/QuestionSolved.vue'


// teacher
import TeacherHome from './components/teacher/TeacherHome.vue'
import TeacherMain from './components/teacher/TeacherMain.vue'
import CheckProfileAll from './components/teacher/CheckProfileAll.vue'
import MakeList from './components/teacher/MakeList.vue'
import SendQuestion from './components/teacher/SendQuestion.vue'
import SortlistProfileall from './components/teacher/SortlistProfileall.vue'

export default [
  

    {path:'/',component:MainPage,children:[
        {path:'', component: HomePage},
        {path:'Check_Profile',component:CheckProfile},
        {path:'Sortlist_Profile',component:SortlistProfile},
      
    ]}, 
    {path:'/login',component:LoginPage,children:[
        {path:'', component: StudentsLogin},
        {path:'teacher', component: TeacherLogin},
        {path:'studentsinup', component: StudentsSignup},
        {path:'teachersignup', component: TeacherSignup},

    ]},
    {path:'/student',component:StudentsMain,children:[
        {path:'', component: StudentHome},
        {path:'profile', component: StudentsProfie},
        {path:'addfriend', component: AddFriend},
        {path:'qustion_solved', component: QuestionSolved},
        {path:'target', component: MakeTarget},

    ]},
    {path:'/teacher',component:TeacherMain,children:[
        {path:'', component: TeacherHome},
        {path:'check_profileA', component: CheckProfileAll},
        {path:'makelist', component: MakeList},
        {path:'sortlist', component: SortlistProfileall},
        {path:'send', component: SendQuestion},

    ]},


   
   ]