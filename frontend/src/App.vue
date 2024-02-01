<template>
  <div class="container">
    <Header  />
    <div class="contents">
      <div class="links">
        <router-link to="/" :class="{'active' : routeValue}">Home</router-link>
        <router-link to="/done_tasks">Done_Tasks</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent} from "vue";
import { useRouter } from "vue-router";
import Header from "./components/Header.vue";
export default defineComponent ({
    name : 'App',
    components : {Header},
    setup() {
      const router = useRouter()
      const currentRoute = computed(() => router.currentRoute.value.path)
      let routeValue:boolean;
      if (currentRoute.value === '/') {
        routeValue = true
      } else {
        routeValue = false
      }
      return { currentRoute,routeValue }
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
  border: 1px solid steelblue;
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
  background-color : steelblue;
  position : absolute;
  bottom : -5px;
  left : 0px;
}

</style>