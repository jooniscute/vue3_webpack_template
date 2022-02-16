<template>
  <div class="about">
    <div class="photo">
      <LoadingSpinner v-if="imageLoading" absolute />
      <img :src="require(`../assets/${image}`).default" :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ github }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import LoadingSpinner from "~/components/LoadingSpinner";
import { mapState } from "vuex";
export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return { imageLoading: true };
  },
  computed: {
    ...mapState("about", ["image", "name", "email", "github", "phone"]),
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.$loadImage(require(`../assets/${this.image}`).default);
      this.imageLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    // background-color: $gray-200;
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>
