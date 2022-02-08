export default {
  // store에서 모듈화 되어 사용될 수 있음을 명시
  namespaced: true,

  // data
  state: () => ({
    // movies: [],
  }),

  // computed 속성 (state로 계산)
  getters: {
    // movieIds(state) {
    //   return state.movies.map((x) => x.imdbID);
    // },
  },

  // methods - state를 변경시킬 수 있다 (이거로만 데이터 변경 가능)
  mutations: {
    // resetMovies(state) {
    //   return (state.movies = []);
    // },
  },

  // methods - state를 수정하지 못함. 비동기 동작! context, payload를 인자로 함
  actions: {
    // searchMovies({ state, getters, commit }, payload) {
    //   console.log(state, getters, commit);
    // },
  },
};
