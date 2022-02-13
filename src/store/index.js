import { createStore } from "vuex";
import about from "./about";
import imageLoadSample from "./imageLoadSample";

export default createStore({
  modules: {
    about,
    imageLoadSample,
  },
});
