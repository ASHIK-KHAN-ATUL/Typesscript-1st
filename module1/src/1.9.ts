{
  // type alias

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Ashik",
    age: 22,
    gender: "male",
    contactNo: "01306068794",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "Atul",
    age: 20,
    gender: "male",
    address: "kushtia",
  };

  const student3: Student = {
    name: "Atul",
    age: 20,
    gender: "male",
    address: "kushtia",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Ashik Khan";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
