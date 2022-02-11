<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>

<script>
import PageHeader from "~/components/PageHeader";
import PageFooter from "~/components/PageFooter";
export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style lang="scss">
@import "~/scss/main";
</style>
