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
  
