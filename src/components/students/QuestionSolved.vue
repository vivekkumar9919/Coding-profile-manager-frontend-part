<template>
  <div>
    <div id="topheading">My Question list</div>

    <div class="questionsolCont">
      <form
        class="row g-3 questionsolvedBox"
        @submit.prevent="addquestionfunc"
        id="formid"
      >
        <div class="col-auto">
          <label for="inputdescription" class="visually-hidden">Username</label>
          <input
            type="text"
            class="form-control"
            id="inputdescription"
            placeholder="Question Description"
            title="Question Description"
            required
            v-model="Description"
          />
        </div>
        <div class="col-auto">
          <label for="inputplatform" class="visually-hidden">Username</label>
          <input
            type="text"
            class="form-control"
            id="inputplatform"
            placeholder="Platform"
            title="Platform"
            v-model="Platform"
          />
        </div>
        <div class="col-auto">
          <label for="inputnote" class="visually-hidden">Username</label>
          <input
            type="text"
            class="form-control"
            id="inputnote"
            placeholder="Note"
            title="Note"
            required
            v-model="Note"
          />
        </div>
        <div class="col-auto">
          <label for="inputtopic" class="visually-hidden">Username</label>
          <input
            type="text"
            class="form-control"
            id="inputtopic"
            placeholder="Topic"
            title="Topic"
            required
            v-model="Topic"
          />
        </div>
        <div class="col-auto">
          <label for="inputQlink" class="visually-hidden">Username</label>
          <input
            type="text"
            class="form-control"
            id="inputQlink"
            placeholder="Question link"
            title="Question link"
            v-model="Question_link"
          />
        </div>
        <div id="selectinput" class="col-auto">
          <select
            class="form-select"
            aria-label="Default select example"
            required
            v-model="Needpratice"
          >
            <option value="" selected="selected" disabled>Need Pratice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Add Question
          </button>
        </div>
      </form>
    </div>

    <!-- outputcontainer -->
    <div class="outputCont">
      <div class="questionlist" id="codechefid">
        <div class="card-header card heading">Solved Question list</div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Platform</th>
              <th scope="col">Note</th>
              <th scope="col">Topic</th>
              <th scope="col">Question link</th>
              <th scope="col">Needpratice</th>
              <th scope="col"><button @click="deleteQues()">delete</button></th>
            </tr>
          </thead>
          <tbody id="Questionrowadd"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "QuestionSolved",

  data() {
    return {
      Description: "",
      Platform: "",
      Note: "",
      Topic: "",
      Question_link: "",
      Needpratice: "",
      listfromserver: {},
    };
  },

  methods: {
    async addquestionfunc() {
      console.log(this.inputdata);
      const DataByUser = await JSON.stringify({
        email: localStorage.getItem("email"),
        question_Description: this.Description,
        platform: this.Platform,
        note: this.Note,
        topic: this.Topic,
        question_link: this.Question_link,
        need_pratice: this.Needpratice,
      });
      // console.log(DataByUser);
      let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .post(
          `http://localhost:3000/api/student/question`,
          DataByUser,
          customConfig
        )
        .then((response) => {
          console.log(response.data);
          alert("Question added successfully");
          document.getElementById("formid").reset();
          location.reload();
        })
        .catch((err) => {
          console.log(`nhi hua bhai ye rha errr ${err}`);
        });
    },
    deleteQues() {
      console.log("question deleted");
    },
  },

  async mounted() {
    await axios
      .get(
        "http://localhost:3000/api/student/question/showing_question/" +
          localStorage.getItem("email")
      )
      .then((response) => {
        // console.log(response.data);
        this.listfromserver = response.data;
        console.log(this.listfromserver);
      })
      .catch((error) => {
        console.log(error);
        this.errmsg = "Error in fetching data";
      });

    for (let i = 0; i < this.listfromserver.length; i++) {
      console.log("inside the loop");
      const addques = document.getElementById("Questionrowadd");

      const box = document.createElement("tr");
      box.innerHTML = `
                <td style="word-wrap: break-word;min-width: 160px;max-width: 210px;">${this.listfromserver[i]["question_Description"]}</td>
              <td class="tdclass">${this.listfromserver[i]["platform"]}</td>
              <td class="tdclass">${this.listfromserver[i]["note"]}</td>
              <td class="tdclass">${this.listfromserver[i]["topic"]}</td>
              <td class="tdclass"> <a href="${this.listfromserver[i]["question_link"]}" target="_blank">Link</a></td>
              <td class="tdclass">${this.listfromserver[i]["need_pratice"]}</td>
              <td class="tdclass"> <button @click="deleteQues()"> delete </button></td>
      `;
      
      addques.appendChild(box);
    }
  },
};
</script>



<style scoped>
#topheading {
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 600px;
}

.questionsolCont {
  display: flex;
  justify-content: center;
  align-content: center;
  /* border: 2px solid red; */
}
.questionsolvedBox {
  height: 150px;
  display: flex;
  justify-content: center;
  align-content: center;
  /* border: 2px solid red; */
  margin-top: 20px;
  padding: 30px 20px 50px 20px;
}

.outputCont {
  margin-top: 50px;
  min-height: 450px;
  /* border: 2px solid black; */
}

.questionlist {
  width: 85%;
  /* border: 2px solid red; */
  padding: 25px;
  margin: auto;
}
.heading {
  font-size: 20px;
  color: white;
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  background: linear-gradient(to right, #2c3e50, #bdc3c7);
}
.tdclass {
  word-wrap: break-word;
  min-width: 160px;
  max-width: 160px;
}

</style>