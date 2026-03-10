let https = 'https://hexarate.paikama.co/api/rates/USD/GBP/latest';

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("HIBA");
        }
        return response.json();
    })
    .then(json => {
        
    })