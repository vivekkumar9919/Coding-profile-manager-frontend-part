<template>
  <div>
    <!-- <h1>students Login</h1> -->
    <div class="form">
      <div class="vh-70 d-flex justify-content-center align-items-center outerContainer">
        <div
          class="
            col-md-4
            p-5
            shadow-sm
            border
            rounded-5
            border-primary
            bg-white
          "
        >
          <h2 class="text-center mb-4 text-primary">Login Form Students</h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control border "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control border"
                id="exampleInputPassword1"
              />
            </div>
            <p class="small">
              <a class="text-primary" href="forget-password.html"
                >Forgot password?</a
              >
            </p>
            <div class="d-grid">
              <button class="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
          <div class="mt-3">
            <p class="mb-0 text-center">
              Don't have an account?
              <a href="/login/studentsinup" class="text-primary fw-bold">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
<!-- <router-view></router-view> -->



  </div>
</template>


<script>
export default {
  name: "StudentsLogin",
};
</script>


