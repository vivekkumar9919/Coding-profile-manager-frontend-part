
<template>
  <div>
    <div class="topimgContainer3">
      <div class="topimageBox3">
        <div id="topheading">
          <div id="heading1">Sortlist Profle</div>
          <div id="headingContent">
         This project is develop to integrate the profile data of leetcode, codechef and codeforces at one place with other more features.
          </div>
        </div>
      </div>
    </div>

    <div class="ContentBox">
      <div class="takeinpCont">
        <div class="takeinpBox">
          <div id="formdiv">
            <form @submit.prevent="generatedata" class="row g-3">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Codechef @username"
                  v-model="username"
                />
                <br />
              </div>
              <div>
                <button
                  @click.prevent="addusername"
                  type="button"
                  class="btn btn-primary mb-3"
                >
                  Add User
                </button>
                &nbsp;&nbsp;
                <button type="submit" class="btn btn-primary mb-3">
                  Generate
                </button>
                <!-- @click.prevent="generatedata" -->
              </div>
            </form>
          </div>

          <div id="Selction">Selection Criteria</div>
          <div class="inpSelectCont">
            <div id="inpSelectBox">
              <table id="TableSelection" border="0px">
                <thead>
                  <tr>
                    <th class="selectionTableHead">Stars</th>
                    <th class="selectionTableHead">Rating</th>
                    <th class="selectionTableHead">Highest Rating</th>
                    <th class="selectionTableHead">Global Rank</th>
                    <th class="selectionTableHead">Country Rank</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Stars"
                        v-model="userInpStars"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Rating"
                        v-model="userInpRating"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Highest Rating"
                        v-model="userInpHRating"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Global Rank"
                        v-model="userInpGRating"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Country Rank"
                        v-model="userInpCRank"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="userlistCont">
        <div class="userlistBox">User list :- {{ userlist }}</div>
      </div>

      <div class="resulttableCont">
        <div class="codecheflist platform" id="codechefid">
          <div class="card-header card heading">Codechef</div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Stars</th>
                <th scope="col">Rating</th>
                <th scope="col">Highest Rating</th>
                <th scope="col">Global Rank</th>
                <th scope="col">Country Rank</th>
                <th scope="col">Status</th>
                <!-- <th scope="col">Date</th> -->
              </tr>
            </thead>
            <tbody id="addrowcodechef"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import axios from "axios";

export default {
  name: "SortlistProfileall",
  data() {
    return {
      userlist: [],
      username: "",
      posts: [],
      errmsg: "",
      isPaused: false,

      userInpStars: 0,
      userInpRating: 0,
      userInpHRating: 0,
      userInpGRating: 10000000,
      userInpCRank: 10000000,

      fusername: "",
      fstars: "",
      frating: "",
      fhrating: "",
      fgrating: "",
      fcrank: "",
      fdate: "",

      status:'',
    };
  },

  methods: {
    addusername() {
      if (this.username) {
        this.userlist.push(this.username);
        console.log(this.username);
        console.log(this.userlist);
        document.getElementById("inputPassword2").value = "";
      } else {
        console.log("ok");
      }
    },

  

    async generatedata() {
      let dt = new Date();
      let date = dt.getDate();
      let month = dt.getMonth();
      let year = dt.getFullYear();
      let todayDate = date + "/" + month + "/" + year;
       console.log(todayDate)


      for (let key in this.userlist) {
        // console.log(this.userlist[key]);

        this.posts = [];
        await axios
          .get(
           `api/codechef/user/${this.userlist[key]}`
          )
          .then((response) => {
          
            // console.log(response.data);
            this.posts = response.data;
          })
          .catch((error) => {
            console.log(error);
            this.errmsg = "Error in fetching data";
          });

 
        if (this.posts.length != 0) {
              
        if (
            this.posts.rating[0] >= this.userInpStars &&
            this.userInpRating <= this.posts.rating_number &&
            this.userInpHRating <= this.posts.max_rank &&
            this.posts.global_rank <= this.userInpGRating &&
            this.posts.country_rank <= this.userInpCRank
          ) {
              this.status='Yes'
           
          }
          else{
            this.status="No"
          
          }


        const boxWrapper = document.getElementById("addrowcodechef");
        const box = document.createElement("tr");
        if(this.status=='Yes'){
          box.classList.add('table-success')
        }
        else{
          box.classList.add('table-danger')
        }
        box.innerHTML = `
              <td>${this.userlist[key]}</td>
              <td>${this.posts.rating}</td>
              <td>${this.posts.rating_number}</td>
              <td>${this.posts.max_rank}</td>
              <td>${this.posts.global_rank}</td>
              <td>${this.posts.country_rank}</td>
              <td>${this.status}</td>
      `;
        boxWrapper.appendChild(box);
      }
               let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
            await axios.post(
                "api/teacher/sortlist/savelist",
                {
                   status:this.status,
                   email:localStorage.getItem('email2'),
                   username:this.userlist[key]
                },customConfig
              )
              .then((response) => {
                console.log(response);
              });
          
          }
        
      }
    },

  
};
</script>


<style scoped>

.takeinpCont {
  display: flex;
  justify-content: center;
  align-content: center;
}

.topimageBox3 {
  /* border: 2px solid red; */
  height: 650px;
  width: 1530px;
  background-image: url("../../assets/sortlist1.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.ContentBox {
  padding-top: 30px;
  background-repeat: no-repeat;
  background-size: cover;
}

.takeinpBox {
  height: 330px;
  width: 680px;
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #536577, #bdc3c7);
  background: linear-gradient(to right, #536577, #bdc3c7);
  border: 2px solid white;
}

.inp {
  width: 120px;
}

#msgbox {
  position: absolute;
  width: 300px;
  border: 2px solid red;
}

#mytable {
  margin-bottom: 100px;
}

.resulttableCont {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
}

.userlistCont {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 20px;
  color: black;
}


#mytable table,
#mytable th,
#mytable td,
#mytable tr {
  border: 1px solid white;
  text-align: center;
  color: black;

}

#mytable th,
td {
  width: 150px;
  text-align: center;
}

#mytable tr td {
  border: 1px solid black;
}

.inpSelectCont {
  display: flex;
  justify-content: center;
  align-items: center;
}

#Selction {
  text-align: center;
  color: white;
  font-size: 25px;
  margin-bottom: 20px;
}

#TableSelection {
  border: 0px;
  margin: 10px;
  /* visibility: hidden; */
}

#TableSelection tr {
  text-align: center;
}

.selectionTableHead {
  color: white;
}

#formdiv {
  /* border: 2px solid red; */

  margin-top: 30px;
  padding-left: 240px;
  margin-bottom: 20px;
}

.platform {
  width: 85%;
  /* border: 2px solid red; */
  padding: 25px;
  margin: auto;
}
.heading
{
      background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #536577, #bdc3c7);
  background: linear-gradient(to right, #536577, #bdc3c7);
  color: white;
  font-size: 20px;
  letter-spacing: 1px;
}
</style>