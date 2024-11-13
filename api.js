export async function fetchData() {
    const apiKey = process.env.API_KEY; // Vercel에서 설정한 API_KEY를 가져옴
    console.log('API Key:', apiKey); // API 키가 제대로 로드됐는지 확인

    const url = `https://open.api.nexon.com/mabinogi/v1/npcshop/list?npc_name=%EB%8D%B0%EC%9C%84&server_name=%EC%9A%B8%ED%94%84&channel=1`;
    try {
        console.log('Calling API...');
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'x-nxopen-api-key': apiKey // 환경 변수로부터 API 키 사용
            }
        });
        if (!response.ok) {
            throw new Error('API 요청 실패');
        }
        console.log('API Response:', response); // 응답 객체 로그
        const data = await response.json(); // JSON 응답을 파싱

        // API 호출에 성공했으면, JSON 데이터를 포맷하여 화면에 출력
        document.getElementById('result').innerHTML = `
        <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    } catch (error) {
        console.error('Error:', error); // 오류가 발생하면 콘솔에 로그
        document.getElementById('result').innerHTML = `오류: ${error.message}`;
    }
}
