<template>
    <div>
        <!-- <h1>Teacher Register</h1> -->
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
          <h2 class="text-center mb-4 text-primary">SignUp Form Teacher</h2>
          <form class="form" @submit.prevent="datapost()">
            <div class="mb-2">
              <label for="InputName" class="form-label">Name</label>
              <input
                type="text"
                class="form-control border"
                id="InputName"
                v-model="teacherdata.name"
              />
            </div>

            <div class="mb-2">
              <label for="InputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control border"
                id="InputEmail1"
                aria-describedby="emailHelp"
                v-model="teacherdata.email"
              />
            </div>

                <div class="mb-2">
              <label for="InputJobID" class="form-label">Job ID</label>
              <input
                type="text"
                class="form-control border"
                id="InputJobID"
                v-model="teacherdata.jobid"
              />
            </div>

            <div class="mb-3">
              <label for="InputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control border"
                id="InputPassword1"
                v-model="teacherdata.password"
              />
            </div>

            <div class="mb-3">
              <label for="InputPassword2" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control border"
                id="InputPassword2"
              />
            </div>
          
            <div class="mb-3">
              <label for="InputGender" class="form-label"
                >Gender</label
              >
              <select id="InputGender" name="gender" class="border" v-model="teacherdata.gender" >
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="N">Can't say</option>
                <!-- <option value="audi">Audi</option> -->
              </select>
            </div>

            <div class="d-grid">
              <button class="btn btn-primary" >SignUp</button>
            </div>
          </form>
          <div class="mt-3">
            <p class="mb-0 text-center">
              Already have account!
              <a href="/login/teacher" class="text-primary fw-bold">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>






    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'TeacherRegister',
    data(){
      return{
        teacherdata:{},
      }
    },
  methods: {
    async datapost() {
      console.log(this.teacherdata);
      const UserRegisterData = await JSON.stringify(this.teacherdata);
      console.log(`json data ${UserRegisterData}`);
     let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(`api/teacher_login/register`, UserRegisterData,customConfig)
        .then((response) => {
          console.log(response.data);
            if (response.status == 200) {
            console.log("Signup successufully");
            localStorage.setItem("teacher_flag", true);
            localStorage.setItem("email2",this.teacherdata.email)
            this.$router.push("/teacher");
          } else {
            console.log(" email is wrong");
          }
         
        })
        .catch((err) => {
          console.log(`nhi hua bhai ye rha errr ${err}`);
          alert("Email Already exist ")
        });
    },
  },

}
</script>


<style scoped>
#InputGender{
    margin-left: 20px;
    padding: 5px;
    border-radius: 4px;
}
</style>