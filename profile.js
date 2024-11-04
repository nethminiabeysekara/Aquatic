
// Updates the progress bar and percentage display

function updateProgress(percentage) {
    // Update the width of the progress fill
    document.getElementById("progress-fill").style.width = percentage + "%";
    // Update the displayed percentage
    document.getElementById("pr").textContent = percentage + "%";
}

updateProgress(0)

var page = "0";
var page2 = "0";


// Event listener for the user form submission
document.getElementById("user-form").addEventListener("click", function () {
    // Get the name input value
    var name = document.getElementById("name-input").value.trim();
    // Check if name is empty
    if (name === "") {
         // Alert the user to enter a name
        alert("Please enter your name before submitting.");
        return;
    }
     // Update the displayed name
    document.getElementById("display_name").textContent = name;
    // Hide the name input field and display the surname input field
    document.getElementById("name").style.display = "none";
    document.getElementById("surname").style.display = "block";
// Update current and next pages
    page = "name";
    page2 = "surname";

})

document.getElementById("surname-form").addEventListener("click", function () {
    var surname = document.getElementById("surname-input").value.trim();
    if (surname === "") {
        alert("Please enter your surname before submitting.");
        return;
    }
    document.getElementById("display_surname").textContent = surname;
    document.getElementById("surname").style.display = "none";
    document.getElementById("age").style.display = "block";

    page = "surname";
    page2 = "age";

   
})

document.getElementById("age-form").addEventListener("click", function () {
    var age = document.getElementById("age-input").value.trim();
    if (age === "") {
        alert("Please enter your age before submitting.");
        return;
    }

    document.getElementById("display_age").textContent = age;
    document.getElementById("age").style.display = "none";
    document.getElementById("gender").style.display = "block";

    page = "age";
    page2 = "gender";
})

document.getElementById("gender-form").addEventListener("click", function () {
    var gender = document.getElementById("gender-input").value.trim();
    if (gender === "0") {
        alert('Please select your gender before submitting');
        return;
    }

    document.getElementById("display_gender").textContent = document.getElementById("gender-input").value
    document.getElementById("gender").style.display = "none"
    document.getElementById("agree").style.display = "block"

    page = "gender";
    page2 = "agree";

})

document.getElementById("agree-form").addEventListener("click", function () {

    if (document.getElementById("agree-input").checked === false) {
        alert("Please agree to the terms and conditions before submitting.");
        return;
    }

    document.getElementById("display_terms").textContent = "Yes";

    document.getElementById("agree").style.display = "none";
    document.getElementById("occupation").style.display = "block";
    document.getElementById("step").textContent = "Step 2";

    document.querySelector(".display-box").style.display = "block";
    document.getElementById("step1").style.display = "block";

    page = "agree";
    page2 = "occupation";

    updateProgress(33.3);
})

document.getElementById("occupation-form").addEventListener("click", function () {
    var occupation = document.getElementById("occupation-input").value.trim();
    if (occupation === "") {
        alert("Please enter your occupation before submitting.");
        return;
    }

    document.getElementById("display_occupation").textContent = occupation;
    document.getElementById("occupation").style.display = "none";
    document.getElementById("intrests").style.display = "block";

    page = "occupation";
    page2 = "intrests";
})

document.getElementById("intrests-form").addEventListener("click", function () {
    var intrests = document.getElementById("intrests-input").value.trim();
    if (intrests === "") {
        alert("Please enter your interests before submitting.");
        return;
    }

    document.getElementById("display_intrests").textContent = intrests;
    document.getElementById("intrests").style.display = "none";
    document.getElementById("fundraising").style.display = "block";

    page = "intrests";
    page2 = "fundraising";
})

document.getElementById("fundraising-form").addEventListener("click", function () {
    var fundraising = document.getElementById("fundraising-input").value.trim();
    if (fundraising === "") {
        alert("Please enter your preference for fundraising before submitting.");
        return;
    }

    document.getElementById("display_fundraising").textContent = fundraising;
    document.getElementById("fundraising").style.display = "none";
    document.getElementById("education").style.display = "block";

    page = "fundraising";
    page2 = "education";
})

document.getElementById("education-form").addEventListener("click", function () {
    var education = document.getElementById("education-input").value.trim();
    if (education === "0") {
        alert("Please select your highest level of education before submitting.");
        return;
    }

    document.getElementById("display_education").textContent = education;
    document.getElementById("education").style.display = "none";
    document.getElementById("fish").style.display = "block";
    document.getElementById("step").textContent = "Step 3";
    document.getElementById("pr").textContent = "66.6%";

    document.getElementById("step2").style.display = "block";

    page = "education";
    page2 = "fish";

    updateProgress(66.6);
})

document.getElementById("fish-form").addEventListener("click", function () {
    var fish = document.getElementById("fish-input").value.trim();
    if (fish === "0") {
        alert("Please enter your preference for fish before submitting.");
        return;
    }

    document.getElementById("display_fish").textContent = fish;
    document.getElementById("fish").style.display = "none";
    document.getElementById("water").style.display = "block";

    page = "fish";
    page2 = "water";
})

document.getElementById("water-form").addEventListener("click", function () {
    var water = document.getElementById("water-input").value.trim();
    if (water === "") {
        alert("Please provide your thoughts on life under water before submitting.");
        return;
    }

    document.getElementById("display_water").textContent = water;
    document.getElementById("water").style.display = "none";
    document.getElementById("income").style.display = "block";

    page = "water";
    page2 = "income";
})

document.getElementById("income-form").addEventListener("click", function () {
    var income = document.getElementById("income-input").value.trim();
    if (income === "") {
        alert("Please enter your approximate annual income before submitting.");
        return;
    }

    document.getElementById("display_income").textContent = income;
    document.getElementById("income").style.display = "none";
    document.getElementById("suggestions").style.display = "block";

    page = "income";
    page2 = "suggestions";    
})

document.getElementById("feedback-form").addEventListener("click", function () {
    var suggestions = document.getElementById("feedback-input").value.trim();
    if (suggestions === "") {
        alert("Please provide any feedback or suggestions before submitting.");
        return;
    }

    document.getElementById("display_suggestions").textContent = suggestions;
    document.getElementById("suggestions").style.display = "none";
    document.getElementById("pr").textContent = "100%";

    document.getElementById("step3").style.display = "block";

    page = "suggestions";
    page2 = "income";

    updateProgress(100);
})


document.getElementById("back-btn").addEventListener("click", function () {
    document.getElementById(page2).style.display = "none";
    document.getElementById(page).style.display = "block";
})