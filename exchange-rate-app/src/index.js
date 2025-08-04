const { fetchRates } = require('./utils/fetchRates');

const getTodayString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}년 ${mm}월 ${dd}일`;
};

const displayRates = (rates) => {
    console.log(`금일 (${getTodayString()}) 환율 (1원 기준):`);
    if (!rates) {
        console.log('환율 정보를 가져올 수 없습니다.');
        return;
    }
    console.log(`달러(USD): ${rates.USD ?? '-'}`);
    console.log(`유로(EUR): ${rates.EUR ?? '-'}`);
    console.log(`파운드(GBP): ${rates.GBP ?? '-'}`);
    console.log(`엔화(JPY): ${rates.JPY ?? '-'}`);
    console.log(`\n1000원(KRW) 기준`);
    console.log(`달러(USD): ${rates.USD ? (rates.USD * 1000).toFixed(4) : '-'}`);
    console.log(`유로(EUR): ${rates.EUR ? (rates.EUR * 1000).toFixed(4) : '-'}`);
    console.log(`파운드(GBP): ${rates.GBP ? (rates.GBP * 1000).toFixed(4) : '-'}`);
    console.log(`엔화(JPY): ${rates.JPY ? (rates.JPY * 1000).toFixed(4) : '-'}`);
};

const init = async () => {
    try {
        const rates = await fetchRates();
        displayRates(rates);
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
};

init();