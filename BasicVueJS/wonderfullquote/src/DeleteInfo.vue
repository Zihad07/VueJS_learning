<template>
  <div class="row">
    <div class="col-sm-12 mx-auto my-2 text-center">
      <div class="alert alert-info" role="alert">
        <strong>Info: Click on a Quote to delete it!</strong>
      </div>
    </div>
  </div>
</template>

<script>

  export default  {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      createNew() {
        console.log(this.quote);
        this.$emit('quoteAdded',this.quote);
        this.quote =  '';
      }
    }
  }

</script>

<style>

</style>
