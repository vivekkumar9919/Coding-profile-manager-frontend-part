


<template>
  <div>
    <!-- topimage conatiner -->
    <div class="topimgContainer">
      <div class="topimageBox">
        <div id="topheading">
          <div id="heading1">Coding Profile Manager</div>
          <div id="headingContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            aliquam quod illo alias, commodi necessitatibus Lorem ipsum dolor
            sit amet.
          </div>
        </div>
      </div>
    </div>

    <!-- Contest details constiner -->
    <div class="contestheading">
      <vue-typed-js
        :strings="['Codechef', 'Codeforces','Leetcode']"
        :loop="true"
        :typeSpeed="150"
        :startDelay="1000"
      >
        <h2>Upcoming contest on <span class="typing"></span></h2>
      </vue-typed-js>
    </div>

    <div class="contestcontainer">
      <div class="contestbox">
        <ul id="listofContest">
          <li v-for="details in contestdetails" :key="details.url">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                  >
                    {{ details.site }}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    Title :- {{ details.title }} <br />
                    Start Time :-
                    {{ startAndEndTimetoDate(details.startTime) }} <br />
                    End Time :- {{ startAndEndTimetoDate(details.endTime) }}
                    <br />
                    Duration:- {{ durationMStoHRS(details.duration) }} hrs
                    <br />
                    <!-- link={{details.url}} -->
                    Contest url:-
                    <a v-bind:href="details.url">{{ details.url }}</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Supported platform -->
    <div class="supportedplatformCont">
         <div id="supportText"> We support <span ><div id="greattext">Great</div></span>Coding Platform </div>
         <center> <hr style="width:40%; height:2px; color:red;"></center>
         <div class="iconbox">
            <div id="codechef" class="iconimage">
                <img src="../assets/codechef icon1.png" alt="img" title="Codechef">
            </div>
            <div id="codeforces" class="iconimage">
                <img src="../assets/codeforces1.png" alt="img" title="Codeforces">
            </div>
            <div id="leetcode" class="iconimage">
                <img src="../assets/leetcode icon2.png" alt="ing" title="leetcode">
            </div>
         </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { VueTypedJs } from "vue-typed-js";
export default {
  name: "HomePage",
  components: {
    VueTypedJs,
  },
  data() {
    return {
      contestdetails: [],
      site: "",
      title: "",
      url: "",
      startTime: "",
      endTime: "",
      duration: "",
    };
  },
  mounted() {
    axios
      .get("https://competeapi.vercel.app/contests/upcoming/")
      .then((response) => {
        console.log(response.data);
        this.contestdetails = response.data;
      })
      .catch((err) => {
        console.log(`error occured ${err}`);
      });
  },

  methods: {
    durationMStoHRS(time) {
      time = time / 1000;
      time = time / 3600;
      return time;
    },
    startAndEndTimetoDate(milliseconds) {
      var dt = new Date(milliseconds);
      return dt;
    },
  },
};
</script>


<style scoped>
.topimgContainer,
.PlatformNameCont {
  display: flex;
  justify-content: center;
  align-content: center;
}

.topimageBox {
  /* border: 2px solid red; */
  height: 650px;
  width: 1530px;
  /* border: 2px solid red; */
  background-image: url("../assets/home1.png");
  background-repeat: no-repeat;
  background-size: cover;
}
#topheading {
  /* height: 130px; */
  width: 600px;
  /* border: 2px solid red; */
  position: absolute;
  left: 200px;
  top: 200px;
  padding: 20px;
}
#heading1 {
  font-size: 40px;
  font-family: cursive;
  color: white;
  background-color: rgb(2, 117, 216);
  width: fit-content;
  padding-left: 5px;
  padding-right: 5px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
.contestheading {
  /* text-align: center; */
  display: flex;
  justify-content: center;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.typing{
    background-color: red;
    color: white;
}
.contestcontainer {
  display: flex;
  /* border: 2px solid red; */
  justify-content: center;
}
.contestbox {
  /* background-color: rgb(216, 211, 211); */
  /* background-color: rgb(2, 117, 216); */
  width: 70%;
  /* border: 2px solid black; */
}

#listofContest {
  list-style: none;
}

.accordion {
  --bs-accordion-btn-icon: url();
  --bs-accordion-btn-active-icon: url();
}


.supportedplatformCont{
    background-image: linear-gradient(rgb(255, 255, 255) 33%, rgb(213, 217, 217));
    height: 300px;
    /* border: 2px solid black; */
    margin-top: 20px;
}
#supportText{
    margin-top: 10px;
    text-align: center;
    font-size: 31px;
}
.iconbox{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;

}
.iconimage{
    height: 120px;
    width: 110px;
    /* border: 2px solid red; */
    
}
.iconbox img{
    height: 120px;
    width: 110px;
}
#codechef,#codeforces,#leetcode{
  margin-right: 50px;
}
#greattext{
  background-color: red;
  font-size: 32px;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px; 
  width: fit-content;
  display: inline;
 transform: rotate(20deg);
 /* border: 2px solid black; */
}
</style>


