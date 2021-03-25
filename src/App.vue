<template>
  <div style="height: 100%; width: 100%">
    
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
  methods: {
   
  },
  created() {
    localStorage.getItem("token") &&
      this.$store.commit("login", localStorage.getItem("token"));

    window.addEventListener("beforeunload", () => {
      if (this.$store.state.token != null) {
        localStorage.setItem("token", this.$store.state.token);
      }
    });
  },
};
</script>
<style>

</style>
