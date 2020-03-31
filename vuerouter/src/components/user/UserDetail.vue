<template>
  <div class="userdeatail">
    <h1>The User Deatail Page</h1>
    <p>User has loaded : {{ $route.params.id }}</p>
    <router-link
      :to="link"
      class="btn btn-primary"
    >
      Edit User
    </router-link>

  </div>
</template>

<script>
    import Home from "../Home";

    export default {
        data() {
            return {
                link: {name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', q: 100}}
            }
        },
        beforeRouteEnter(to, from, next) {
            if (true) {
                next();
            } else {
                next({name: 'home'});
            }
        }
    }
</script>

<style>

</style>
