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
    let inputName = document.getElementById("name");
    let inputAge = document.getElementById("age");

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
function register(event) {
    event.preventDefault();

    let inputName = document.getElementById("name").value;
    let inputAge = document.getElementById("age").value;
    let inputGender = document.getElementById("gender").value;
    let inputBreed = document.getElementById("breed").value;
    let inputService = document.getElementById("service").value;

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

// get services from local storage 
function getServices(){
    console.log("gerServices funtion")
    let services = read ();
    let option = "";

    for(let i=0; i<services.length; i++){
        let service =services[i];

        option +=`
        <option vaule="${service.desriptiiom}">${service.description}</option>
        `

    }
    $("#txtService").append(option);
}

// Clear form function
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("breed").value = "";
    document.getElementById("service").value = "";
}

// Display pets function
function displayPet() {
    let tableBody = document.getElementById("petsTableBody");
    let result = "";

    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        result += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Remove</button></td>
            </tr>
        `;
    }

    tableBody.innerHTML = result;
    document.getElementById("totalPets").textContent = pets.length;
}

// Delete pet function
function deletePet(index) {
    pets.splice(index, 1);
    displayPet();
}

function init() {
    let pet1 = new Pet("Porky", 1, "Male", "French Bulldog", "Grooming");
    let pet2 = new Pet("Apollo", 8, "Male", "Cane Corso", "Vaccines");
    let pet3 = new Pet("Finn", 3, "Male", "French Bulldog", "Vaccines");
    let pet4 = new Pet("Rocco", 5, "Male", "French Bulldog", "Vaccines");
    pets.push(pet1, pet2, pet3, pet4);

    displayPet();
    getServices();

    $("mode").on("click"), function() {
        if($("body").css("background-color") === `rgb(0,0,0)`){
            $("body".css("background-color", "white"));
            $(this).text("Dark mode");

        }else {
            console.log(" Light mode ")
        }
    }

    document.getElementById("petForm").addEventListener("submit", register);
}

window.onload = init;