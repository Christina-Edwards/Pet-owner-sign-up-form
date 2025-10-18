console.log("Hello from state.js"); // Proof of life

// Global state object
const state = {
  name: localStorage.getItem("name") || "",
  email: localStorage.getItem("email") || "",
  zipcode: localStorage.getItem("zipcode") || "",
  pets: []
};

console.log("Loaded state:", state);

// Save pets to localStorage (serialization)
function savePets() {
  const petData = state.pets.map(pet => ({
    name: pet.name,
    age: pet.age,
    species: pet.species,
    energy: pet.energy,
    happiness: pet.happiness
  }));
  localStorage.setItem("pets", JSON.stringify(petData));
}
