// // ARRAY QUANTO OS OBJETOS QUALQUER TIPO DE VALOR E QUANTIDADE ILIMITADA

// let listaDevs = [
//     {
//         nome: "David",
//         idade: 29,
//         profissao: "DevFront",
//         tecnologias: ["React", "Next", "TailWind"]
//     },
//     {
//         nome: "Eduardo",
//         idade: 22,
//         profissao: "Dev Java",
//         tecnologias: ["Spring", "Hibernate"]
//     },
//     {
//         nome: "Bryan",
//         idade: 25,
//         profissao: "Dev Mobile",
//         tecnologias: ["React-Native", "Styled-component", "TailWind"]
//     }
// ]
    

// const novoDev = {
//     nome: 'Matheus',
//     idade: 25,
//     profissao: 'Dev Mobile',
//     tecnologias: ["React-Native", "Styled-component", "TailWind"]
// }

// listaDevs.push(novoDev);

// console.log(listaDevs[1]);

// listaDevs[1].salario = 10000;


// for(let i = 0; i < listaDevs.length; i ++){
//     console.log(`O desenvolvedor são $ {listaDevs[i].nome}`)
// }



// let array = [1,2,3,4];
// array
// (4) [1, 2, 3, 4]
// let array2 = [1,2,3,4]
// array2
// (4) [1, 2, 3, 4]
// let array = array2
// array2[0] = 10
// 10
// array
// (4) [10, 2, 3, 4]
// array2
// (4) [10, 2, 3, 4]



// let imoveis = [];
// let opcao = '';

//     do {
//         opcao = prompt(`Bem-vindo ao Cadastro de Quantidade de imóveis cadastrados: ${imoveis.length}
//         \n Escolha uma opção: 
//         \n 1- Novo Imovel 
//         \n 2- Lista de Imoveis 
//         \n 3- Sair`)
        
//         switch (opcao) {
//             case '1':
//                 let nome= prompt('Nome do proprietário?')
//                 imoveis.push(nome)
//                 let quartos= prompt('Quantidade de quartos?')
//                 let banheiros= prompt('Quantidade de banheiros?')
//                 let garagem= prompt('Possui garagem?')
//                alerta(`Nome do proprietário: ${nome} \n Quantidade de quartos: ${quartos} \n Quantidade de banheiros: ${banheiros} \n Possui garagem: ${garagem} `)
//                 break;
//             case '2':
//                 break;
//             case '3':
//                 alert('Saindo do programa...');
//                 break;
//             default:
//                 alert('Opção inválida.');
//         }
    // } while (opcao !== '3');




    // let imoveisCadastrados = [];
    // let opcao = '';
    
    //  do {
    //        opcao = prompt(`Bem-vindo ao Cadastro de Quantidade de
    //        imóveis cadastrados: ${imoveisCadastrados.length}
    //        \n Escolha uma opção: 
    //        \n 1- Novo Imovel.
    //        \n 2- Lista de Imoveis .
    //        \n 3- Sair.`)
            
    //         switch (opcao) {
    //             case "1":
                    
    //                 let imovel = {};
    //                 imovel.nome= prompt('Nome do proprietário?')
    //                 imoveisCadastrados.push(imovel.nome)
    //                 imovel.quartos= parseInt (prompt('Quantidade de quartos?'))
    //                 imovel.banheiros= prompt('Quantidade de banheiros?')
    //                 imovel.garagem= prompt('Possui garagem? sim/não')
    //                let salvarImovel = confirm(
    //                 `Deseja salvar este imovel? \n
    //                 Nome do proprietário: ${imovel.nome} \n
    //                 Quantidade de quartos: ${imovel.quartos} \n
    //                 Quantidade de banheiros: ${imovel.banheiros} \n
    //                 Possui garagem: ${imovel.garagem} \n`)
    //                 break;
    //             case "2":
    //                  if(imoveisCadastrados.length === 0){
    //                      alert(`Não existe imoveis cadastrados.`)
    //                  }else{
    //                      for(let i = 0; i < imoveisCadastrados.length; i++){
    //                     alert(
    //                         `
    //                         Imoveis:
    
    //                        Proprietario: ${imoveisCadastrados[i].nome} \n
    //                        Quartos: ${imoveisCadastrados[i].quartos} \n
    //                        Banheiros: ${imoveisCadastrados[i].banheiro} \n
    //                        Garagem: ${imoveisCadastrados[i].garagem} \n `)
    //                     }
    //                 }
    //                 break;
    //             case "3":
    //                 alert('Saindo do programa...');
    //                 break;
    //             default:
    //                 alert('Opção inválida.');
    //         }
    //     } while (opcao !== '3');


    