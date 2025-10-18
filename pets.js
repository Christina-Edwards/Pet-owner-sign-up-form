console.log("Hello from pets.js!");

const globalState = {
  pets: []
};

// Proof-of-life: create pet "Hello"
const helloPet = createPet("Hello", 2, "Dog");
helloPet.status();

document.getElementById("createPetBtn").addEventListener("click", () => {
  const name = document.getElementById("petNameInput").value;
  const age = parseInt(document.getElementById("petAgeInput").value);
  const species = document.getElementById("petSpeciesInput").value;

  console.log("Form Input Values:", { name, age, species });

  const newPet = createPet(name, age, species);
  globalState.pets.push(newPet);

  newPet.status();
  console.table(globalState.pets);
});
