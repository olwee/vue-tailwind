<template lang="pug">
#app
  template(v-if="$route.matched.length")
    gen-sidebar
    .gen-body
      .gen-content
        router-view
  template(v-else="")
    p 404 Page Not Found
</template>
<style lang="less"></style>
<script>
import Sidebar from './Sidebar.vue';

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  components: {
    'gen-sidebar': Sidebar,
  },
  mounted() {
    this.$nextTick(this.loaded);
  },
  mixins: [
  ],
  watch: {
    '$route' (to, from){
      this.loaded();
    },
  },
  methods: {
    loaded() {
    },
  },
};
</script>
