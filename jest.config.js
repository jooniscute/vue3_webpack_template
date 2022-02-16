module.exports = {
  // 파일 확장자를 생략했던 경우 Jest가 검색할 확장자 목록
  moduleFileExtensions: ["js", "vue"],
  // '~' 같은 경로 별칭을 매핑
  moduleNameMapper: {
    // ~/ 로 시작하는 모든 경로
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  // 테스트 환경에서 무시할 경로 명시
  modulePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
  // JSDOM 환경에 대한 URL 설정 (테스트에 제공하는 브라우저 환경)
  testURL: "http://localhost",
  // 정규식과 일치하는 파일의 변환 모듈 지정
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
};
