<template>
  <TopBar />
  <Home />
  <BottomBar />
</template>

<script>
import Home from "./views/Home.vue";
import TopBar from "./components/TopBar.vue";
import BottomBar from "./components/BottomBar.vue";

export default {
  name: "App",
  components: {
    Home,
    TopBar,
    BottomBar,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;

  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
