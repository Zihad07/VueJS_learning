<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Hi How r u ? :)'"></p>

      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background = "'green'">This is Highlight...</p>
        <p v-highlight = "'green'">This is Highlight...</p>
        <p v-highlight:background.delayed = "'red'">Delayed</p>
        <p v-local-highlight="'red'">Loccal Hightlight</p>
        <p v-html="'<strong>Hi How r u ? :)'"></p>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directive: {
      'local-highlight' : {
        bind(el,binding,vNode) {
          var delay = 0;

          if(binding.modifiers['delayed']){
            delay = 2000;
          }

          setTimeout(() => {
            if(binding.arg === 'background') {
              el.style.backgroundColor = binding.value;
            }else{
              el.style.color = binding.value;
            }
          },delay)
        }
      }
    }
  }
</script>

<style>

</style>

