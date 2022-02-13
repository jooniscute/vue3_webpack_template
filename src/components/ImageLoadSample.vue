<template>
  <div
    :style="{ backgroundImage: `url(${url})` }"
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
import axios from "axios";
import LoadingSpinner from "~/components/LoadingSpinner";
export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      url: "",
      imageLoading: true,
    };
  },
  methods: {
    async loadMoviePoster() {
      const title = "Eat Pray Love";
      const type = "movie";
      const year = "2010";
      const page = 1;
      const OMDB_API_KEY = "aba4220b";
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
      );
      this.url = res.data.Search[0].Poster.replace("SX300", `SX700`);
      this.$loadImage(this.url).then(() => {
        this.imageLoading = false;
      });
    },
  },
  mounted() {
    this.loadMoviePoster();
  },
};
</script>
