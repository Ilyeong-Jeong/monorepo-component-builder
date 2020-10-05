<style lang="scss">

  .default-layout {
    width           : 100%;
    background-color: grey;
    color           : blue;
    font-weight     : bold;

    .default-layout-sub {
      width           : 100%;
      background-color: green;
      color           : red;
    }
  }

</style>

<template>
  <div class="default-layout">
    {{text}}

    <div class="default-layout-sub">
      {{text}}
    </div>
  </div>
</template>

<script>

  export default {
    
    data () {
      return {
        text: "main"
      }
    }
    
  }

</script>