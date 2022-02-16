<template>
  <header>
    <div class="nav nav-pills">
      <div class="nav-item" v-for="nav in navigations" :key="nav.name">
        <!-- RouterLink: a tag 대신 vue에서 제공하는 요소 
             active일 경우 router-link-active class 추가됨
             그냥 active로 적용되게 하려면? active-class 속성 추가 -->
        <RouterLink class="nav-link" active-class="active" :to="nav.href">
          {{ nav.name }}
        </RouterLink>
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
          href: "/",
        },
        {
          name: "About",
          href: "/about",
        },
      ],
    };
  },
  methods: {
    // $router: 페이지 조작을 위한 객체
    // RouterLink 대신 아래 메소드를 @click 등으로 연결하여 이동 가능
    toAbout() {
      this.$router.push("/about");
    },
  },
};
</script>
