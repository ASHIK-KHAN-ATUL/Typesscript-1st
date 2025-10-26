{
  // mapped types
  const arrOfNumber: number[] = [1, 2, 3, 4, 5, 6, 7];

  const arrOfString1: string[] = ["ashik", "papon", "alif"];

  const arrOfString2: string[] = arrOfNumber.map((number) => number.toString());
  console.log(arrOfString2);

  //
  //
  //

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"];

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const are1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 389,
  };

  //
}
