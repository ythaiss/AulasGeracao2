

let produtos = [];
let id = 1;

function validarDados() {
  event.preventDefault();
  console.log("Formulario envio");

  if (nome.value.length !== 0) {
    nome.classList.remove("is-invalid");
    nome.classList.add("is-valid");
  } else {
    nome.classList.remove("is-valid");
    nome.classList.add("is-invalid");
  }

  if (valor.value.length !== 0) {
    valor.classList.remove("is-invalid");
    valor.classList.add("is-valid");
  } else {
    valor.classList.remove("is-valid");
    valor.classList.add("is-invalid");
  }

  if (quantidade.value.length !== 0) {
    quantidade.classList.remove("is-invalid");
    quantidade.classList.add("is-valid");
  } else {
    quantidade.classList.remove("is-valid");
    quantidade.classList.add("is-invalid");
  }

  if (imagem.value.length !== 0) {
    imagem.classList.remove("is-invalid");
    imagem.classList.add("is-valid");
  } else {
    imagem.classList.remove("is-valid");
    imagem.classList.add("is-invalid");
  }
}

function cadastrarProduto() {
  produtos.push({
    id: id,
    nome: nome.value,
    valor: valor.value,
    quantidade: quantidade.value,
    imagem: imagem.value,
  });
  id++;
  renderProduto();
}

function renderProduto() {
  conteudoTabela.innerHTML = ``;
  produtos.map((item) => {
    conteudoTabela.innerHTML += `
    
    <tr>
     <td>${item.id}</td>
     <td>${item.nome}</td>
     <td>${item.valor}</td>
     <td>${item.quantidade}</td>
     <td><img style="width: 200px; heigth: 200px" src="${item.imagem}"></td>
     <td>
         <button class="btn btn-warning">Editar</button>
         <button class="btn btn-danger">Excluir</button>
     </td>
    </tr>
 `;
  });
}