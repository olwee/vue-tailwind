<template lang="pug">
.sidebar
  p Sidebar Filler
</template>
<style lang="less"></style>
<script>

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  components: {
  },
  mounted() {
    this.$nextTick(this.loaded);
  },
  mixins: [
  ],
  watch: {
    $route(to, from) {
      this.loaded();
    },
  },
  methods: {
    loaded() {
      console.debug('Route changed');
    },
  },
};
</script>
