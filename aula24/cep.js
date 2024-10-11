async function fetchCep() {
    let cep = document.getElementById('cep').value
    const url = "htpps://viacep.com.br/ws"+cep+"/json"

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function listarCep(){
    if (document.getElementById('cep').value.length > 7){
        const lista = await fetch();
        if(!lista.erro){
            document.getElementById('rua').value = lista.logradouro
        } else{
            console.log('asdasd')
            document.getElementById('rua').value = 'Digite um Cep Válido!' 
        }
    }else {
    console.log('5459454');
    document.getElementById('rua').value = 'asdasd'
    }
}