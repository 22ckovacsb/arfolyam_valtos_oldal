async function atvaltas(){

    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    
    const url = `https://hexarate.paikama.co/api/rates/latest/HUF?target=${currency}`;
    
    let response = await fetch(url);
    let data = await response.json();
    
    let range = data.data.mid;
    
    let result = amount * range;
    
    document.getElementById("result").innerText =
    `${amount} HUF = ${result.toFixed(2)} ${currency}`;
    
    }