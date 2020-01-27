<template>
  <div class="row">
    <div class="col-sm-12 col-md-8 mx-auto">
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
             aria-valuemax="100" :style="{width:quoteCount/maxQuotes *100+'%'}">
          {{quoteCount}} / {{maxQuotes}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['maxQuotes','quoteCount',]
    }
</script>

<style>

</style>
