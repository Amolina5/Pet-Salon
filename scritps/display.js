//HOW TO MAKE CARD EXAMPLE
//function displayPet() {
    ///let cardsSection = document.getElementById("pets");
    //let result = "";
  
    //for(let i=0; i<pets.length; i++){
      //console.log("myForLoop");
      //let pet = pets[i];
  
      //result += `
        //<div class="card col-3 mx-2">
          //<div class="card-body">
            //<h5 class="card-title">${pet.name} - <span class="text-secondary">${pet.service}</span></h5>
            //<h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
            //<p class="card-text">${pet.gender == "Male" ? 'Male ♂' : 'Female ♀'}, ${pet.age} years.</p>
            //<button class="btn btn-danger btn-sm">Delete</button>
          //</div>
        //</div>
      //`
    //}
  
    //cardsSection.innerHTML = result;
  //
    //}
//window.onload = init;

let pets = [];

function registerPet() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let breed = document.getElementById("breed").value;
    let service = document.getElementById("service").value;

    let pet = { name, age, gender, breed, service };
    pets.push(pet);
    displayRow();
}

function displayRow() {
    let tableBody = document.getElementById("petsTableBody");
    let totalPets = document.getElementById("totalPets");
    let result = "";

    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        result += `
            <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender == "Male" ? 'Male ♂' : 'Female ♀'}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete</button></td>
            </tr>
        `;
    }

    tableBody.innerHTML = result;
    totalPets.textContent = pets.length;
}

function deletePet(index) {
    pets.splice(index, 1);
    displayRow();
}

window.onload = function() {
    displayRow();
};