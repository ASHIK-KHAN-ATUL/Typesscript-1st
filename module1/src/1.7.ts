{
  // spread oparator
  // rest oparator
  // destructing

  // Learn spread oparator
  const bros1: string[] = ["mir", "mizan", "firoz"];
  const bros2: string[] = ["tomal", "raha", "rahat"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "mezba",
    redusx: "mir",
    dbms: "mizan",
  };
  const mentors2 = {
    prisma: "firoz",
    nextjs: "tonmoy",
    cloud: "mizan",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //   Learn rest oparator

  const greetFriends = (...friends: string[]) => {
    // console.log(`hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("abul", "babul", "kabul", "ubul", "labul");

  //   s
}
