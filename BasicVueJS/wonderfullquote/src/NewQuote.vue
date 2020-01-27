<template>
  <div class="row">
    <div class="col-sm-8 col-md-6 mx-auto my-2">
      <form action="">
        <div class="form-group">
          <label>Qoute:</label>
          <textarea class="form-control"  rows="3" v-model="quote"></textarea>
        </div>

        <button class="btn btn-primary btn-sm" @click.prevent="createNew">Add Quote</button>
      </form>
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
        // console.log(this.quote);
        this.$emit('quoteAdded',this.quote);
        this.quote =  '';
      }
    }
  }

</script>

<style>

</style>
