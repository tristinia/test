import { fetchData } from './api.js'; // API 호출 함수 모듈을 불러오기

document.getElementById('fetchDataBtn').addEventListener('click', () => {
    fetchData();  // API 호출 함수 실행
});
