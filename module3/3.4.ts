{
  // instancaof guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log("I am meowing");
    }
  }
  class Brid extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
  }

  //   smart way to handle fucntion bebohar

  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog bhai", "dog");
  const cat = new Cat("Cat bhai", "cat");
  const brid = new Brid("Brid bhai", "Brid");

  getAnimal(dog);
  getAnimal(cat);
  getAnimal(brid);

  //
  //
}
