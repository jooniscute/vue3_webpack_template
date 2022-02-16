export default {
  // store에서 모듈화 되어 사용될 수 있음을 명시
  namespaced: true,

  // data
  //? $store.state.모듈.상태
  state: () => ({
    name: "JK",
    email: "chlwnsrms5@gmail.com",
    github: "www.github.com/jooniscute",
    phone: "+82-10-9866-1566",
    image: "logo.png",
  }),

  // computed 속성 (state로 계산)
  //? $store.getters['모듈/게터']
  getters: {
    // movieIds(state) {
    //   return state.movies.map((x) => x.imdbID);
    // },
  },

  // methods - state를 변경시킬 수 있다 (이거로만 데이터 변경 가능)
  //? $store.commit('모듈/변이')
  mutations: {
    // resetMovies(state) {
    //   return (state.movies = []);
    // },
  },

  // methods - state를 수정하지 못함. 비동기 동작! context, payload를 인자로 함. 대부분의 로직 처리
  // context를 통해 getters, mutations(commit), actions(dispatch), state 다 가져올 수 있음
  //? $store.dispatch('모듈/액션')
  actions: {
    // searchMovies({ state, getters, commit }, payload) {
    //   console.log(state, getters, commit);
    // },
  },
};
