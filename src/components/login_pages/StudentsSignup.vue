<template>
  <div>
    <!-- <h1>Students Register</h1> -->
    <div class="form">
      <div
        class="
          vh-70
          d-flex
          justify-content-center
          align-items-center
          outerContainer
        "
      >
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
          <h2 class="text-center mb-4 text-primary">SignUp Form Students</h2>
          <form>
            <div class="mb-2">
              <label for="exampleInputName" class="form-label">Name</label>
              <input
                type="text"
                class="form-control border"
                id="exampleInputName"
              />
            </div>

            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control border"
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

            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control border"
                id="exampleInputPassword2"
              />
            </div>
          
            <div class="mb-3">
              <label for="exampleInputGender" class="form-label"
                >Gender</label
              >
              <select id="exampleInputGender" name="gender" class="border" >
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="N">Can't say</option>
                <!-- <option value="audi">Audi</option> -->
              </select>
            </div>

            <div class="d-grid">
              <button class="btn btn-primary" type="submit">SignUp</button>
            </div>
          </form>
          <div class="mt-3">
            <p class="mb-0 text-center">
              Already have account!
              <a href="/login" class="text-primary fw-bold">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>



    
  </div>
</template>

<script>
export default {
  name: "StudentsRegister",
};
</script>


<style scoped>
#exampleInputGender{
    margin-left: 20px;
    padding: 5px;
    border-radius: 4px;
}
</style>