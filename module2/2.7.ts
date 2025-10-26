{
  // generic contraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Ashik",
    age: 22,
    address: "dhaka",
  };
  const car = {
    model: "Toyota 132",
    year: 2022,
    address: "dhaka",
  };

  const result1 = getPropertyValue(car, "model");

  //   obj["key"] = 22;
}
