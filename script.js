// Factory function to create a pet owner object
function createPetOwner(name, email, phone, city, zip, petName, petType) {
  return {
    name,
    email,
    phone,
    city,
    zip,
    petName,
    petType,

    status() {
      console.log(`Owner: ${this.name}`);
      console.log(`Email: ${this.email}, Phone: ${this.phone}`);
      console.log(`Location: ${this.city}, ${this.zip}`);
      console.log(`Pet: ${this.petName} (${this.petType})`);
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded");

  const signUpBtn = document.getElementById("signUpBtn");
  console.log("Sign Up button found:", signUpBtn);

  signUpBtn.addEventListener("click", () => {
    console.log("Sign Up button clicked!");

    // Capture form values
    const name = document.getElementById("ownerName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const petName = document.getElementById("petName").value;
    const petType = document.getElementById("petType").value;

    // Create petOwner object
    const petOwner = createPetOwner(name, email, phone, city, zip, petName, petType);

    // Proof of life
    petOwner.status();
    console.table(petOwner);
  });
});



