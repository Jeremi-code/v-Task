<template>
  <div class="container">
    <Header  />
    <div class="contents">
      <div class="links">
        <router-link to="/" :class="{'active' : routeValue}">Home</router-link>
        <router-link to="/done_tasks" :class="{'active' : !routeValue}">Done_Tasks</router-link>
      </div>
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent} from "vue";
import { useRouter } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default defineComponent ({
    name : 'App',
    components : {Header,Footer},
    setup() {
      const router = useRouter()
      const currentRoute = computed(() => router.currentRoute.value.path)
      const routeValue = computed(() => currentRoute.value === '/')
      return { routeValue }
    }
  });
</script>

<style >
*{
  box-sizing : border-box;
  padding : 0px;
  margin : 0px;
}
.container {
  display : flex;
  flex-direction: column;
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 5px;
  font-family : 'poppins', sans-serif;
}
.links {
 display : flex; 
 justify-content: center;
 font-family : 'Oswald', sans-serif;
}
.links a {
  margin : 10px;
  /* position: relative; */
}
a {
  text-decoration : none;
  color : black;
  font-size : 20px;
  position: relative;
}
.active::after {
  content : ' ';
  width : 100%;
  height : 5px;
  background-color :green ;
  position : absolute;
  bottom : -5px;
  left : 0px;
}

</style>