<template>
  <h1>Home: Hello Vue!!</h1>
  <router-link to="/about" class="btn btn-primary">Go to About</router-link>
  <JkLogo />
</template>

<script>
import JkLogo from "~/components/JkLogo";
export default {
  components: { JkLogo },
};
</script>
