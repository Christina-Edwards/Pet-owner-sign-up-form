console.log("script.js loaded");

// Proof of life
console.log("hello world");

// Global state object
const state = {};
console.table(state); // Proof of life 1

// Factory function (Bonus)
function createPetOwner(data) {
  return {
    ...data,
    status: function () {
      console.log(`Owner: ${this.name}, Pet: ${this.petName}, Type: ${this.petType}`);
    }
  };
}

// Save form data
function saveForm() {
  console.log("button clicked!"); // Proof of life

  const name = document.getElementById("ownerName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;
  const petName = document.getElementById("petName").value;
  const petType = document.getElementById("petType").value;
  
 // Proof of life for each input
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("City:", city);
  console.log("Zip:", zip);
  console.log("Pet Name:", petName);
  console.log("Pet Type:", petType);

  // Populate state
  state.petOwner = createPetOwner({
    name,
    email,
    phone,
    city,
    zip,
    petName,
    petType,
    petType,
  });

  console.table(state); // Final proof of life
  state.petOwner.status(); // Bonus method
}

// Hook up button
document.getElementById("signUpBtn").addEventListener("click", () => {
  console.log("Sign Up button clicked!");
});
document.addEventListener("DOMContentLoaded", () => {
  // All your DOM-related code goes here
  const signUpBtn = document.getElementById("signUpBtn");

  signUpBtn.addEventListener("click", () => {
    console.log("Sign Up button clicked!");

    // Grab form values
    const ownerName = document.getElementById("ownerName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const petName = document.getElementById("petName").value;
    const petType = document.getElementById("petType").value;

    console.log({ ownerName, email, phone, city, zip, petName, petType });
  });
});



