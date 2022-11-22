<template>
    <div>
        <NavBar/>
        <router-view></router-view>
        <FooterComp/>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterComp from './FooterComp.vue'
export default {
  components: { NavBar ,FooterComp},
    name:'MainPage',
}
</script>