<template>
  <div class="col-sm-6 col-md-4 col-lg-3 my-2">
    <div class="card">
      <div class="card-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .card-body {
    font-family: 'Indie Flower', cursive;
    font-size: 24px;
    color: #6e6e6e;
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: #ffe2e2;
  }
</style>
