{
  // genaric type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 5, 8];
  const rollNumbers: GenericArray<number> = [3, 5, 8];

  //   const mentors: string[] = ["Me.x", "Mr.y", "Mr.x"];
  const mentors: GenericArray<string> = ["Me.x", "Mr.y", "Mr.x"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }
  // type User = {
  //   name: string;
  //   age: number;
  // };

  const user: GenericArray<User> = [
    {
      name: "ashik",
      age: 22,
    },
    {
      name: "papon",
      age: 25,
    },
  ];

  //   generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manus: GenericTuple<string, string> = ["Mr.x", "Mr.y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "ashik", email: "ashikkhan693693@gmail.com" },
  ];

  //
}
