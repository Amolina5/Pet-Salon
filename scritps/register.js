let pets = [];

// Object literal
let petSalon = {
    name: "The Fashion Pet",
    address: {
        street: "Palm Ave",
        zip: "22900"
    }
};

// Object constructor
function Pet(name, age, gender, breed, service) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

// Validations
function isValid(pet) {
    let validation = true; // boolean result
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");

    if (pet.name === "") {
        validation = false;
        inputName.classList.add("error");
    }

    if (pet.age === "") {
        validation = false;
        inputAge.classList.add("error");
    }

    return validation; // boolean result
}

// Register function
function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;

    console.log(inputName, inputAge, inputGender, inputBreed, inputService);

    // Create the obj
    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService);
    console.log("newPet = ", newPet);

    // Check validations
    if (isValid(newPet)) {
        // Push the obj to the array
        pets.push(newPet);
        displayPet();
        // Clear the form
        clearForm();
        // Display the obj on the console
        console.log(pets);
    }
}

// Clear form function
function clearForm() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtService").value = "";

    displayPetNames();

}

// Display pets function
function displayPet() {
    let cardsSection = document.getElementById("pets");
    let result = "";

    for (let pet of pets) {
        result += `
            <div class="card" id="${pet.name}">
                <h3>${pet.name} - ${pet.service}</h3>
                <p>${pet.breed}</p>
                <p>${pet.gender === "Male" ? 'Male ♂' : 'Female ♀'}, ${pet.age} years.</p>
                <button onclick="deletePet('${pet.name}')">Delete</button>
            </div>
        `;
    }

    cardsSection.innerHTML = result;
}

// Delete pet function
function deletePet(petName) {
    pets = pets.filter(pet => pet.name !== petName);
    displayPet();

}

function init() {
    let pet1 = new Pet("Porky", 1, "Male", "French Bulldog", "Grooming");
    let pet2 = new Pet("Apollo", 8, "Male", "Cane Corso", "Vaccines");
    let pet3 = new Pet("Finn", 3, "Male", "French Bulldog", "Vaccines");
    let pet4 = new Pet("Rocco", 5, "Male", "French Bulldog", "Vaccines");
    pets.push(pet1, pet2, pet3, pet4,);

    displayPet();
 }

 

window.onload = init;