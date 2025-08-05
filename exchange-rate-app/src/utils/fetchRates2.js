const axios = require('axios');

// ExchangeRate-API 무료 플랜(1시간마다 갱신) 사용 예시
// https://www.exchangerate-api.com/ 회원가입 후 무료 API 키 발급 필요
// YOUR_API_KEY 부분을 실제 발급받은 키로 변경하세요.

async function fetchRates2() {
    try {
        const url = 'https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/KRW';
        const response = await axios.get(url);
        const rates = response.data.conversion_rates || {};
        return {
            USD: rates.USD ?? null,
            EUR: rates.EUR ?? null,
            GBP: rates.GBP ?? null,
            JPY: rates.JPY ?? null,
        };
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        return null;
    }
}

module.exports = { fetchRates2 };