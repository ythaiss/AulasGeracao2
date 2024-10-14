let numSorteado = 0;
let chances = 4;

function numAleatorio (){
    numSorteado = Math.floor(Math.random() * 50) + 1;

    console.log(numSorteado);
}

function numVerificacao (){

    let selection = document.getElementById('selection').value;

    if (chances <= 1) {
        alert(`Você não tem mais tentativas. O número sorteado era: ${numSorteado}`); 
        return;
    }

    if(selection > 50 || selection < 0){
        alert('Aposta inválida');
        return;
    }

    chances--;

    if( selection > numSorteado){
        alert(`O número sorteado é MENOR. Você tem ${chances} chance(s)`);
    } 
    else if( selection < numSorteado){
        alert(`O número sorteado é MAIOR. Você tem ${chances} chance(s)`);
    }
    else{
        alert(`PARABÉNS!! Você acertou o número sorteado.`)
    }
}

numAleatorio();
