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
          <routuer-link to="/" class="nav-link active" aria-current="page" >Home</routuer-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/Check_Profile">Check Profile</a> -->
          <router-link to="/Check_Profile" class="nav-link">Check Profile</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/Sortlist_Profile">Sortlist Profile</a> -->
            <router-link to="/Sortlist_Profile" class="nav-link">Sortlist Profile</router-link>
        </li>
   
        <span class=" loginNavelement">
          <!-- <a class="nav-link  " href="/login">Sign/Signup</a> -->
            <router-link to="/student" class="nav-link" v-if="useremail">Profile</router-link>
            <router-link to="/login" class="nav-link" v-else>Sign/Signup</router-link>
        </span>
      </ul>
    </div>
  </div>
</nav>

    </div>
</template>


<script>
export default {
    name:'NavBar',
    data(){
      return{
        useremail:"",
      }
    }
    ,mounted(){
      this.useremail=localStorage.getItem('email');
    }
}
</script>


<style scoped>
.loginNavelement{
 position: relative;
  float: right;
  background-color: rgb(238, 105, 105);
  color: white;
  border-radius: 5px;
}
</style>