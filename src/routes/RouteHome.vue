<template>
  <h1>Home: Hello Vue!!</h1>
  <p>
    <router-link to="/about">Go to About</router-link>
  </p>
  <JkLogo />
</template>

<script>
import JkLogo from "~/components/JkLogo";
export default {
  components: { JkLogo },
};
</script>
