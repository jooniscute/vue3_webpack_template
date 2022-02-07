<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from "~/components/NavHeader";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "~/scss/main";
</style>
