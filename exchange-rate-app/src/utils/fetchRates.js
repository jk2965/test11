const axios = require('axios');

async function fetchRates() {
    try {
        const url = 'https://api.frankfurter.app/latest?from=KRW&to=USD,EUR,GBP,JPY';
        const response = await axios.get(url);
        const rates = response.data.rates || {};
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

module.exports = { fetchRates };