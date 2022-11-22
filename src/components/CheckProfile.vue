
<template>
  <div>
    <!-- <h1>Check  Profile</h1> -->
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


  </div>
</template>


<script>
export default {
  name: "CheckProfile",
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
  /* background-color: rgb(2, 117, 216); */
  width: fit-content;
  padding-left: 5px;
  padding-right: 5px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
</style>