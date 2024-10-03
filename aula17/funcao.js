
// function dobro(){
//     let numero = Number (prompt('Digite um número'));
//     var dobro2 = numero * 2;
//     alert(`O dobro do numero ${numero} é ${dobro2}`)
// }

// dobro();





// function mediaAluno(num1, num2){
//     let media = (num1 + num2) / 2
//     return media
// }

// let mediaFinal = mediaAluno(8,8);

// console. log(mediaAluno(10, 9));

// console.log(mediaFinal);



// function cadastrarUsuario(validacao){

// }

// function validacao(){
//     console.log('Validar o usuario')
// }


let listaDevs = [
        {
            nome: "David",
            idade: 29,
            profissao: "DevFront",
            tecnologias: ["React", "Next", "TailWind"]
        },
        {
            nome: "Eduardo",
            idade: 22,
            profissao: "Dev Java",
            tecnologias: ["Spring", "Hibernate"]
        },
        {
            nome: "Bryan",
            idade: 25,
            profissao: "Dev Mobile",
            tecnologias: ["React-Native", "Styled-component", "TailWind"]
        }
]

// CALL BACK E FUNÇÃO ANONIMA, PRECISAMOS PASSAR UM PARAMETRO A 
// ESSE PARAMETRO SRVE PARA A GENTE CRIAR UM NOVO ARRAY

listaDevs.map(function(cadaDev){
     console.log(cadaDev);
})

ou

listaDevs.map(() => {

})