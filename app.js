function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let currency = document.getElementById('currency').value;
  
    // Define the conversion rates for different currencies
    const conversionRates = {
        USD: 82.5,
        EUR: 97.8,
        CAD: 60.19,
        GBP: 113.2,
        RUB: 1.28,
        CHF: 88.79,
        GHS: 9.16,
        AUD: 55.55,
        KES: 0.59,
        TAKA: 0.76,
        // Add more currencies and their conversion rates here
    };
  
    // Convert the amount to INR using the specified currency code
    let result = amount * conversionRates[currency];
  
    // Update the result on the HTML element with id 'result'
    document.getElementById('result').innerText = `${result} INR`;
}

