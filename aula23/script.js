
const url = 'https://dog.ceo/api/breeds/image/random'

const dogImg = document.getElementById('dogImg')

// Função para buscar os Dogs na API
function fetchDogs () {
fetch (url)
    .then (response => response.json())
    .then ((dogData) => {
        const dogUrl = dogData.message;
        displayDog(dogUrl);
    })
    .catch(error => console.log('Erro ao buscar o doguinho:', error));
}

console.log(fetchDogs())

// Função para preencher o HTML com a imagem do dog
function displayDog(dogUrl) {
    dogImg.src = dogUrl;
}

// console.log(displayDog)