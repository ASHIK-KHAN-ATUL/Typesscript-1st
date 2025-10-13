{
  // ternary operator || optional chaining || nullish coalescing operator

  //   const age: number = 18;
  //   if (age >= 18) {
  //     console.log("Adult");
  //   } else {
  //     console.log("Not Adult");
  //   }

  //   const isAdult = age >= 18 ? "adult" : "not adult";
  //   //   console.log({ isAdult });

  //   //   nullish coalescing operator
  //   // null / undefiend --> decition making

  //   const isAuthenticated = "";
  //   const result1 = isAuthenticated ?? "Guest";
  //   const result2 = isAuthenticated ? isAuthenticated : "Guest";
  //   console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Ashik",
    address: {
      city: "Dhaka",
      road: "Kakrail",
      presentAddress: "Dhaka town",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  //
}
