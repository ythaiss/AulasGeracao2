//https://randomuser.me/api/?
let api = fetch('https://randomuser.me/api/?results=10');

let users = [];

const cardContainer = document.getElementById('user-cards')

function fetchUsers () {
fetch('https://randomuser.me/api/?results=100')
.then( response => response.json())
.then(data => {
        // console.log(data.results[2].picture)
        users = data.results
        displayUsers(users)
    });
}
//.catch( error => console.error('error:', error ))

function displayUsers(users) {

    let cards = '';

    users.forEach(users => {
        cards += `
              <div class="card m-2 text-center" style="width: 18rem;">
                <img src="${users.picture.large}" class="card-img-top rounded-circle mx-auto mt-3 mb-3 " alt="imagem do(a) ${users.name.first}" style="width:100px; height:100px; object-fit:cover;>
                <div class="card-body">
                 <h5 class="card-name">${users.name.first} ${users.name.last}</h5>
                 <p class="card-email"><strong>Email:</strong> ${users.email}</p>
                 <p class="card-phone"><strong>Número:</strong> ${users.phone}</p>
                 <p class="card-country"><strong>País:</strong> ${users.location.country} </p>
                 <a href="#" class="btn btn-outline-info mt-auto mb-3">Conversar</a>
                </div>
              </div>
        `
    });

    cardContainer.innerHTML = cards;
}


fetchUsers();
