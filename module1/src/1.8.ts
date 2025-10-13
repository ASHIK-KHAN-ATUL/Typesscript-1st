// destructuring

const user = {
  id: 345,
  name: {
    firstName: "Ashik",
    middleName: "Khan",
    lastName: "Atul",
  },
  contactNo: "01306068794",
  address: "kushtia",
};

const {
  contactNo,
  name: { middleName: midName },
} = user;

// Array destructuring

const myFriends = ["Faim", " Ashik", "ratul", "naim", "shazid"];

const [, , bestFriend, ...rest] = myFriends;
