let clientAcessToken = {
    email: "ArtiMeiRWFS@hotmail.com",
    token: "4a2T#O8t7=="
}

localStorage.setItem('CAT', JSON.stringify(clientAcessToken));

let clientInfomationSheet = {
        fullName: "Arti Mei",
        age: 24,
        height: "1,5cm",
        weight: "70kg",
        phoneNumbers: [
            82738423,
            29137448,
            13462142
        ]
    }

    localStorage.setItem('CIS', JSON.stringify(clientInfomationSheet));
    localStorage.removeItem('CAT');

    let client = JSON.parse(localStorage.getItem('CIS'));
    console.log(client)

                        // localStorage

    // localStorage.setItem('(name)', (value)) = Armazena um item
    // localStorage.removeItem('(name)') = Remove um item do armazenamento
    // localStorage.getItem('(name)') = Busca um item do armazenamento

                        // JSON

    // JSON.stringify = Converte um valor em string
    // JSON.parse = Converte um valor em metodo JSON