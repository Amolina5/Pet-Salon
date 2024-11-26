let services = [];

// Constructor for Service
function Service(description, price) {
    this.description = description;
    this.price = price;
}

// Validations
function validService(service) {
    let isValidDescription = true;
    let isValidPrice = true;

    if (service.description === "") {
        isValidDescription = false;
        $("#txtDescription").addClass("error");
        $("#descRequiredText").show();
    } else {
        $("#txtDescription").removeClass("error");
        $("#descRequiredText").hide();
    }

    if (service.price === "") {
        isValidPrice = false;
        $("#txtPrice").addClass("error");
        $("#priceRequiredText").show();
    } else {
        $("#txtPrice").removeClass("error");
        $("#priceRequiredText").hide();
    }

    return isValidDescription && isValidPrice;
}

// Register service
function register() {
    let description = $("#txtDescription").val();
    let price = $("#txtPrice").val();

    let newService = new Service(description, price);

    if (validService(newService)) {
        services.push(newService);
        $("#notification").text("Service registered successfully!").css("color", "green");
        $("#serviceForm")[0].reset();
    } else {
        $("#notification").text("Please fill out all fields correctly.").css("color", "red");
    }
}

function init() {
    // Hook events
    $("#serviceForm").on("submit", function(event) {
        event.preventDefault();
        register();
    });

    // Hide error messages initially
    $(".errorText").hide();

    // Add event listener for the price input field
    $("#txtPrice").on("input", function() {
        // Remove any non-digit characters from the input
        let cleanedInput = $(this).val().replace(/[^\d.]/g, '');

        // Set the cleaned input back into the field
        $(this).val(cleanedInput);
    });
}


window.onload = init;