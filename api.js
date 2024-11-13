export async function fetchData() {
    const apiKey = process.env.API_KEY;
    const url = `https://open.api.nexon.com/mabinogi/v1/npcshop/list?npc_name=%EB%8D%B0%EC%9C%84&server_name=%EC%9A%B8%ED%94%84&channel=1`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'x-nxopen-api-key': apiKey  // 환경 변수로부터 API 키 사용
            }
        });

        if (!response.ok) {
            throw new Error('API 요청 실패');
        }

        const data = await response.json();
        document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('result').innerHTML = `오류: ${error.message}`;
    }
}
