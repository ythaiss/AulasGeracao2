async function fetchCep(){
    let cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
