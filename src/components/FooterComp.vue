
<template>
    <div>
       <div id="footerbox">
           <div id="name">Coding Profile Manager </div>
           <hr>
           <div id="copy">
            Developed By Vivek Kumar &COPY; 2022 All Rights Reserved
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name:'FooterComp',
}
</script>


<style scoped>
#footerbox{
    height: 200px;
    background-color: rgb(2, 117, 216);
    /* margin-top: 100px; */
}
#copy{
    padding-top: 15px;
    font-size: 18px;
    text-align: center;
    font-style: italic;
}
#name{
    padding-top: 45px;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 22px;
    text-align: center;
}
</style>

