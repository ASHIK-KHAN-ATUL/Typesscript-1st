{
  // abstraction

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: 2023,
  //   };

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopEngine the car engine`);
    }
    move(): void {
      console.log(`I am moving the car engine`);
    }
    test(): void {
      console.log(`I am just testing the car engine`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //   abstrac class
  abstract class Car2 {
    abstract startEngine(): void;

    abstract stopEngine(): void;

    abstract move(): void;

    test(): void {
      console.log(`I am just testing the car engine`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stoping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car engine`);
    }
  }

  //   const hondaCar = new Car2();
  //   hondaCar.startEngine();

  //
}
