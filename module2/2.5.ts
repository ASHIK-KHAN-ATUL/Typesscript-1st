{
  // function with - generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 231,
    name: "Ashik Khan",
  });

  //
  //
  //
  //
  //
  //
  //

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res2 = createArrayWithTuple<string, number>("Bangladesh", 45);
  const resTuple = createArrayWithTuple<boolean, string>(true, "ashik");
  const res12 = createArrayWithTuple<boolean, User2>(true, {
    id: 21,
    name: "atul",
  });

  type User2 = { id: number; name: string };

  const resTupleObj = createArrayWithTuple<User, User2>(
    {
      id: 31,
      name: "Ashik Khan",
    },
    {
      id: 231,
      name: "papon Khan",
    }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "ashik",
    email: "ashik@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "atul",
    email: "atul@gmail.com",
    hasWatch: "Tank 3  watch",
  });

  //
}
