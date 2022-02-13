export default {
  // store에서 모듈화 되어 사용될 수 있음을 명시
  namespaced: true,

  // data
  state: () => ({
    url: "default",
  }),

  // computed 속성 (state로 계산)
  getters: {
    // movieIds(state) {
    //   return state.movies.map((x) => x.imdbID);
    // },
  },

  // methods - state를 변경시킬 수 있다 (이거로만 데이터 변경 가능)
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },

  // methods - state를 수정하지 못함. 비동기 동작! context, payload를 인자로 함
  actions: {
    async getPoster(context, payload) {
      try {
        const res = await getMovieData(payload);
        console.log(res.Poster);
        context.commit("updateState", {
          url: res.Poster,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
import axios from "axios";
async function getMovieData(payload) {
  const { title, type, year, page, id } = payload;
  const OMDB_API_KEY = "aba4220b";
  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
