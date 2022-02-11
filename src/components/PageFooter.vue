<template>
  <footer>
    <JkLogo />
    <a href="https://github.com/jooniscute" target="_blank">
      (c) {{ new Date().getFullYear() }} JK
    </a>
  </footer>
</template>

<script>
import JkLogo from "~/components/JkLogo";

export default {
  components: { JkLogo },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  text-align: center;
  opacity: 0.3;
  .logo {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
</style>
