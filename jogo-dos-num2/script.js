// Configurações do jogo
let numeroSecreto;
let chancesRestantes;
let tentativasIncorretas = [];

const totalChances = 5; // Você pode alterar o número de chances aqui

// Elementos do DOM
const welcomeMessage = document.getElementById('welcome-message');
const chancesMessage = document.getElementById('chances-message');
const feedback = document.getElementById('feedback');
const errors = document.getElementById('errors');
const inputNumber = document.getElementById('input-number');
const resultMessage = document.getElementById('result-message');
const gameInterface = document.getElementById('game-interface');
const restartButton = document.getElementById('restart-button');

// Inicializa o jogo
function iniciarJogo() {
    numeroSecreto = Math.trunc(Math.random() * 50) + 1;
    //Passa o resultado no console para que seja possível visualizar o n° selecionado.
    console.log(numeroSecreto)

    chancesRestantes = totalChances;

    tentativasIncorretas = [];

    welcomeMessage.textContent = `Você tem ${totalChances} chances para acertar o número entre 1 e 50. Boa sorte!`;

    chancesMessage.textContent = `Chances restantes: ${chancesRestantes}`;

    feedback.textContent = '';
    errors.textContent = '';
    resultMessage.innerHTML = '';
    gameInterface.style.display = 'block';
    restartButton.style.display = 'none';
    inputNumber.disabled = false;
    document.getElementById('submit-button').disabled = false;
}

// Verifica o palpite do usuário
function verificarPalpite() {
    const palpite = parseInt(inputNumber.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 50) {
        feedback.textContent = 'Por favor, insira um número válido entre 1 e 50.';
        return;
    }

    // Verifica se o número já foi inserido anteriormente
    if (tentativasIncorretas.includes(palpite)) {
        feedback.textContent = 'Você já inseriu esse número, por favor, selecione outro.';
        return;
    }

    if (palpite === numeroSecreto) {
        resultMessage.innerHTML = `<p class="success-message">Parabéns! Você acertou o número ${numeroSecreto}! 🎉</p>`;
        finalizarJogo();
    } else {
        chancesRestantes--;
        tentativasIncorretas.push(palpite);
        feedback.textContent = 'Você errou! Tente novamente.';
        chancesMessage.textContent = `Chances restantes: ${chancesRestantes}`;
        errors.textContent = `Números incorretos: ${tentativasIncorretas.join(', ')}`;

        if (chancesRestantes === 0) {
            resultMessage.innerHTML = `<p class="error-message">Suas chances acabaram! O número correto era ${numeroSecreto}. 😢</p>`;
            finalizarJogo();
        }
    }

    inputNumber.value = ''; // Limpa o campo de input
}

// Finaliza o jogo e exibe o botão de recomeçar
function finalizarJogo() {
    inputNumber.disabled = true;
    document.getElementById('submit-button').disabled = true;
    restartButton.style.display = 'block';
}

// Inicia o jogo ao carregar a página
iniciarJogo();

// Adiciona evento de clique no botão de envio
document.getElementById('submit-button').addEventListener('click', verificarPalpite);

// Adiciona evento de clique no botão de reinício
restartButton.addEventListener('click', iniciarJogo);