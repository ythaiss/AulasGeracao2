const pessoa = {
    nome: "Fulano",
    age: 25,
    email: "example@email.com"
};

// console.log(pessoa.nome)

// const registro = pessoa.nome

// console.log(registro)

// const {nome} = pessoa;

// console.log(nome)

// ({ age: idade } = pessoa)

// console.log(idade)

// retira o nome
// const { nome, ...conteudo } = pessoa

// console.log(conteudo)


///////////////////////////////////////////////////////////////////////

const frutas = ["Kiwi", "Uva", "Pera"]

// const fruta1 = frutas[0]

// console.log(fruta1)


// const [k, u] = frutas

// console.log(k, u)


// desestruturação (vazio),k,u -> descarta o indice 0
// const [ ,k, u] = frutas

// console.log(k, u)


// descarta o indice 0
// const [k, ...rest] = frutas

// console.log(rest)



////////////////////////////////////////////////////////////////
// function ListaDeTenis(){
//     const[tenis, setTenis] = useState([]);

//     useEffect(() => {
//         async function carregarTenis() {
//             const resposta = await fetch('https:/api-store-dolw.onrender.com/shoes')
//             const imagemTenis = resposta.json;

//             setTenis(imagemTenis);
//         }
//         carregarTenis();
//     })