console.log("Hello from petCreator.js!");

function createPet(name, age, species) {
  return {
    name,
    age,
    species,
    energy: 50,
    happiness: 50,

    status() {
      console.log(`${this.name} the ${this.species} is ${this.age} years old.`);
      console.log(`Energy: ${this.energy}, Happiness: ${this.happiness}`);
    },

    feed() {
      this.energy += 10;
      console.log(`${this.name} has been fed. Energy is now ${this.energy}.`);
    },

    play() {
      if (this.energy >= 10) {
        this.happiness += 10;
        this.energy -= 10;
        console.log(`${this.name} played! Happiness: ${this.happiness}, Energy: ${this.energy}`);
      } else {
        console.log(`${this.name} is too tired to play.`);
      }
    }
  };
}
