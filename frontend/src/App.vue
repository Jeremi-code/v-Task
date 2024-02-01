<template>
  <div class="container">
    <Header  />
    <div class="contents">
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/done_tasks">Done_Tasks</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import Header from "./components/Header.vue";
export default defineComponent ({
    name : 'App',
    components : {Header},
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
}
a {
  text-decoration : none;
  color : black;
  font-size : 20px;
}

</style>