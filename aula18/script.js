// DOCUMENTO OBJECT MODEL

// Conseguir tratar o documento como se fosse um objeto

// Manipular melhor os elementos da tela


// Uma forma de selecionar o elemento pelo ID
// NodeList 

let conteudo = document.getElementById('card');
let paragrafo = document.getElementsByTagName('p');
let selecionar = document.getElementsByClassName('cardSection');
let navegacao = document.querySelector('#menu');
let menu = document.querySelectorAll('.conteudoMenu > a')
let cabecalho = document.getElementById('header');
let conteudoSection = document.getElementById('conteudoNovo');



console.log(conteudo);
console.log(paragrafo);
console.log(typeof conteudo);

console.log(selecionar);

console.log(navegacao);

console.log(typeof navegacao);

console.log(menu);

menu.forEach((item)=>{
    console.log(item)
})



function show(){
    alert(`Você clicou aqui`);
    cabecalho.classList.add('novoCard');
}

function cardVermelho(){ 
    conteudoSection.innerHTML = 
    `
    <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Sapiente recusandae earum tempora? Officiis, illo.
          Deleniti quo possimus laboriosam deserunt unde error numquam,
           nobis, amet corrupti, rem consequatur blanditiis quod quis!
    </span>
    `;
  conteudoSection.classList.add('cardVermelho')
}