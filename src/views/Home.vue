<template>
  <div class="home"/>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  beforeMount: function () {
    this.routeTo('Dashboard');
  }
};
</script>
