<template lang="pug">
.dashboard-wrapper.page-wrapper

</template>
<style lang="less">

</style>
<script>

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  filters: {
  },
  components: {

  },
  mounted() {
    this.$nextTick(this.loaded);
  },
  mixins: [
  ],
  watch: {
    '$route' (to, from) {
      this.loaded();
    },
  },
  methods: {
    loaded() {
    },
  },
};
</script>
