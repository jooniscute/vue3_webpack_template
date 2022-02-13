<template>
  <div
    :style="{ backgroundImage: `url(${requestDiffSizeImage(url)})` }"
    style="
      position: relative;
      height: 750px;
      width: 500px;
      background-size: cover;
      background-position: center;
    "
    class="poster"
  >
    <LoadingSpinner v-if="imageLoading" :z-index="9" absolute />
  </div>
</template>

<script>
import LoadingSpinner from "~/components/LoadingSpinner";
export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      imdbId: "tt0879870",
      imageLoading: true,
    };
  },
  computed: {
    url() {
      return this.$store.state.imageLoadSample.url;
    },
  },
  methods: {
    requestDiffSizeImage(url, size = 700) {
      if (!url || url === "N/A") {
        this.imageLoading = false;
        return "";
      }
      // then을 쓰면 return이 비동기랑 상관 없어지므로 src는 바로 반환함
      const src = url.replace("SX300", `SX${size}`);
      this.$loadImage(src).then(() => {
        this.imageLoading = false;
      });
      return src;
    },
  },
  created() {
    this.$store.dispatch("imageLoadSample/getPoster", {
      id: this.imdbId,
    });
  },
};
</script>
