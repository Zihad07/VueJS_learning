
<template>
  <div class="header">
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" active-class="active nav-item" exact>
        <a class="nav-link">Home</a>
      </router-link>
      <router-link to="/user" tag="li" active-class="active nav-item ">
        <a class="nav-link">User</a>
      </router-link>
    </ul>

  
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.active {
    color: #fff;
    background: aqua;
    border-radius: 5px;
}

.nav-link {
    color:#000;
    text-decoration: none;
}
</style>
