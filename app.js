function convertToInr(){
    let usd = document.getElementById('usd').value;
    let inr = usd * 82.5;
    document.getElementById('inr').innerText = inr;
}