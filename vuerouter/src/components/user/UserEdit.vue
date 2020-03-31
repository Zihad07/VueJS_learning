<template>
  <div class="useredit">
    <h1>The User Edit - {{ $route.params.id }}</h1>
    <p>Locale : {{ $route.query.locale }}</p>
    <p>q : {{ $route.query.q }}</p>

    <hr>
    <button class="btn btn-outline-success btn-sm" @click="confirmed = true">Confirm</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          confirmed : false,
      }
  },
  beforeRouteLeave(to , from, next) {
      if(this.confirmed) {
          next();
      }else{
          if(confirm('Are your sure?')){
              next();
          }else{
              next(false);
          }
      }
  },
}
</script>

<style>

</style>
