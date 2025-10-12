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

