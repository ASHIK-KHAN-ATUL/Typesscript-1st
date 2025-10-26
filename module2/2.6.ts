{
  //
  //
  //
  //

  const addCourseToStudent = <
    T extends { name: string; id: number; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 13,
    name: "Khan",
    email: "khan@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 21,
    name: "ashik",
    email: "ashik@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 22,
    name: "atul",
    email: "atul@gmail.com",
    hasWatch: "Tank 3  watch",
  });
}
