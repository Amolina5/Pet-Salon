let pets = [];

let petSalon = {
    name:"The Fasion Pet",
    adress:{
        street:"Palm Ave",
        zip:"22900"
    }
}

// creating the pets
let pet1={
    name:"Porky",
    age: 2,
    gender:"Male",
    service:"grooming",
    breed:"French Bulldog"
}

let pet2={
    name:"apollo",
    age:8,
    gender:"Male",
    Service:"grooming",
    breed:"Cane Corso"
}

let pet3={
    name:"Finn",
    age:3,
    gender:"Male",
    service:"grooming",
    breed:"French Bulldog"

}
pets.push(pet1,pet2,pet3);

function displayPetNames() {
    let petCount = pets.length;
    document.getElementById("petCount").textContent = petCount;
    let petNamesElement = document.getElementById("petNamesList");
    petNamesElement.innerHTML = ""; // clear any existing pet names

    for (let pet of pets) {
        let petNameElement = document.createElement("li");
        petNameElement.textContent = pet.name;
        petNamesElement.appendChild(petNameElement);
    }
}
displayPetNames();