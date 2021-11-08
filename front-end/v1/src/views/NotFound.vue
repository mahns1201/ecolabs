<template>
  <div class="form">
    <img src="../assets/sad.png" alt="../assets/logo.png" />
    <div class="center">
      <label class="title">404</label>
      <label class="sub-title">The page you requested was not found</label>
    </div>
    <!-- <button class="btn" @click="onHome">Go Home</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    onHome: function() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
}

.center {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: xx-large;
  font-weight: bolder;
  text-align: center;
  margin-top: 22px;
}

.sub-title {
  font-size: x-large;
  font-weight: lighter;
  text-align: center;
  margin-top: 2px;
}

.btn {
  font-size: large;
  background-color: black;
  color: white;
  border: none;
  width: 15%;
  height: 40px;
  margin-top: 30px;
}
</style>
