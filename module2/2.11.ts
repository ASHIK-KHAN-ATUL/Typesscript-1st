{
  // utility types

  // pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //   omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required
  type PersonRequired = Required<Person>;

  //   partial
  type PersonPertial = Partial<Person>;

  //   Red only

  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Ashik",
    age: 20,
    contactNo: "01306068794",
  };
  //   person1.name = "atul";

  //
  //
  //
  //

  // Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    // e: 4
  };

  //
}
