// function soma(){ 

// }

// let lista = ["David", 2, true, soma(), underfined]

// console.log(lista)



// let personagem = ['Frodo', 'Gendalf', 'Pippin', 'Aragorn', 'Legolas']

// // PUSH: ADICIONA DADOS NO FINAL DO ARRAY

// personagem.push('Boromir')

// console.log(personagem)

// // UNSHIFT: ADICIONA DADOS NO INICIO DO ARRAY

// personagem.unshift('Sauron')

// console.log(personagem)

// // POP: RETIRA O ULTIMO ELEMENTO ARRAY

// personagem.pop('Boromir')

// console.log(personagem)

// // SHIFT: RETIRA O PRIMEIRO DADO DO ARRAY

// personagem.shift('Sauro')

// console.log(personagem)

// // INCLUDE: VERIFICA SE UM CERTO ELEMENTO ESTÁ PRESENTE NO ARRAY

// let procura = personagem.includes('Gendalf');

// console.log(procura)

// // INDEXOF: PROCURA INDICE DO ELEMENTO NO ARRAY

// let procuraIndice = personagem.indexOf('Frodo');

// personagem[1] = 'Gandolf o Cinzento'

// console.log(procuraIndice);

// console.log(personagem)

// // SLICE(NUM): COPIA UMA PARTE DO ARRAY E DEVOLVE A PARTE COPIADA SEM ALTERAR O ARRAY ORIGINAL

// let selecaoPersonagem = personagem.slice(0, 4)

// console.log(selecaoPersonagem)
// // SLICE(-NUM)
// let outraSelecao = personagem.slice(-4)

// console.log(personagem)

// console.log(outraSelecao)

// // CONCAT: JUNTA OS ARRAYS E OS ITENS E DEVOLVE UM ARRAY SEM ALTERAR OS ARRAYS ORIGINAIS

// let personagem2 = ['Fheanor', 'Fingolfin'];

// let arrayConcat= personagem.concat(personagem2)

// console.log(arrayConcat);

// // JOIN: ELE JUNTA OS ELEMENTOS DE ACORDO COM QUE A GENTE PASSA COMO ARGUMENTO

// let juntarCom = personagem.join('-');
// console.log(juntarCom);



// let personagem = ['Frodo', 'Gendalf', 'Pippin', 'Aragorn', 'Legolas'];

// for(let indice = 0; indice < personagem.length; indice ++){
//     let elemento = personagem[indice];
//     console.log(`O personagem ${elemento} está no indice ${indice}`)
// }



// let fila = [];
// let opcao = '';

// do{
//     let juntarPac = fila.join('-');
//     opcao= prompt(`
//       \n Escolha uma opção 
//       \n ${juntarPac} \n
//       \n 1- Novo paciente
//       \n 2- Consultar paciente
//       \n 3- Encerrar
//     `)
    
//     switch(opcao){
//         case "1":
//             let novoPac= prompt('Digite o nome do paciente');
//             fila.push(novoPac)
//             break;
//         case "2":
//             let consultarPac = fila.shift();
//             if(! consultarPac){
//                 alert('Não existe paciente na fila.')
//             }else{
//                 alert(`O paciente ${consultarPac} foi consultado(a)!`)
//             };
//             break;
//         case "3":
//            alert("Programa encerrando..,") 
//             break;
//         default:
//            alert(`Opção Invalida`)
//             break;    
        
// }
// }while(opcao != "3");





// // objeto

// let listaDePessoas = {
//     nome: 'Thais',
//     idade: 18,
//     profissao: 'Estudante'
// }

// console.log(listaDePessoas);

// console.log(listaDePessoas.profissao);


// let listaDevs = [
//     {
//       nome: 'Thais',
//       idade: 18,
//       profissao: 'Estudante'
//     },
//     {
//       nome: 'Gisele',
//       idade: 27,
//       profissao: 'Estudante'
//     },
//     {
//       nome: 'Myrela',
//       idade: 18,
//       profissao: 'Estudante'
//     },
//     {
//       nome: 'David',
//       idade: 27,
//       profissao: 'Estudante'
//     }
// ]

// console.log(listaDevs);

// console.log(listaDevs[listaDevs.length -1]);