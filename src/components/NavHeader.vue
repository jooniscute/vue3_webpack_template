<template>
  <header>
    <div class="nav">
      <div class="nav-item" v-for="nav in navigations" :key="nav.name">
        <router-link class="nav-link" :to="nav.path">{{ nav.name }}</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
      ],
    };
  },
};
</script>
