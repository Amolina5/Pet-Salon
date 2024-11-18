let pets = [];

let petSalon = {
    name: "The Fashion Pet",
    address: {
        street: "Palm Ave",
        zip: "22900"
    }
};

// Display salon information
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".navbar-brand").textContent = `${petSalon.name} - ${petSalon.address.street}, ${petSalon.address.zip}`;
});

// Pet constructor
function Pet(name, age, gender, breed, service) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

// Register function
function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;

    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService);
    pets.push(newPet);

    // Clear the form
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtService").value = "";

    displayPetNames();
}

// Display pet names
function displayPetNames() {
    let petCount = pets.length;
    document.getElementById("petCount").textContent = petCount;
    let petNamesElement = document.getElementById("petNamesList");
    petNamesElement.innerHTML = "";

    for (let pet of pets) {
        let petNameElement = document.createElement("li");
        petNameElement.textContent = pet.name;
        petNamesElement.appendChild(petNameElement);
    }
}

// Initialize with three pets
function init() {
    let pet1 = new Pet("Porky", 1, "Male", "French Bulldog", "Grooming");
    let pet2 = new Pet("Apollo", 8, "Male", "Cane Corso", "Vaccines");
    let pet3 = new Pet("Finn", 3, "Male", "French Bulldog", "Vaccines");
    let pet4 = new Pet("Rocco", 5, "Male", "French Bulldog", "Vaccines");
    pets.push(pet1, pet2, pet3, pet4);
    displayPetNames();
}

window.onload = init;