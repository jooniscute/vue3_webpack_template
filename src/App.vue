<template>
  <PageHeader />
  <!-- RouterView: 페이지가 출력되는 영역 컴포넌트 -->
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

<style lang="scss"></style>
