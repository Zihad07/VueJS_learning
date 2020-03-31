<template>
  <div>
      <h1>Please Slect a User</h1>
      <hr>
      <div class="list-gourp">
          <router-link to="/user/1" 
          tag="li" class="list-group-item" 
          style="cursor:pointer">
            User 1
          </router-link>
          <router-link to="/user/2" 
          tag="li" class="list-group-item" 
          style="cursor:pointer">
            User 2
          </router-link>
          <router-link to="/user/3" 
          tag="li" class="list-group-item" 
          style="cursor:pointer">
            User 3
          </router-link>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>