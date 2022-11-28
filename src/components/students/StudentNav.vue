<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Coding Profile Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="/">Home</a> -->
          <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/student/profile">Profile</a> -->
          <router-link to="student/profile"  class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/student/addfriend">Add Friends</a> -->
           <router-link to="student/addfriend"  class="nav-link">Add Friends</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/student/qustion_solved">Question Solved</a> -->
           <router-link to="student/qustion_solved"  class="nav-link">Question Solved</router-link>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="/student/target">Target</a>
        </li> -->
        <li class="nav-item" style="cursor:pointer;">
          <a class="nav-link" @click="logoutfun">Logout</a>
        </li>
   
      </ul>
    </div>
  </div>
</nav>

    </div>
</template>


<script>
export default {
    name:'StudentNav',
    methods:{
      logoutfun(){
        localStorage.removeItem('student_flag')
        localStorage.removeItem('email1')
        this.$router.push('/')
      }
    }
}
</script>