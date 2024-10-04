let header = document.getElementById('conteudoHeader');



function criarMenu(){
    header.innerHTML = `
    <img src="assets/luffyy.gif" alt="" style="width: 210px; margin-left: 10px; border-radius: 80%; height: 200px">

    <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
    </nav>
    
    `;

    header.classList.add('cardPrincipal');

}