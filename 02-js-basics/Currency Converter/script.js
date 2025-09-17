const inputForm = document.getElementById('input-form');
const resultDiv = document.getElementById('result');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');


window.addEventListener('DOMContentLoaded', fetchCurrencies);
inputForm.addEventListener('submit', convertCurrency);


async function fetchCurrencies() {
    
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        console.log(data);
        const currencies = Object.keys(data.rates);
        populateCurrencySelect(fromCurrencySelect, currencies);
        populateCurrencySelect(toCurrencySelect, currencies);
    }
async function populateCurrencySelect(selectElement, currencies) {
    currencies.forEach((currency) => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        selectElement.appendChild(option);
    });
}
   
async function convertCurrency(event) {
    event.preventDefault();
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

}