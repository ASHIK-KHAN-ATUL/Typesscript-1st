{
  // Learning Function
  // normal function
  // Arrow function

  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }
  add(2, 4);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method
  const poorUser = {
    name: "Ashik",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is : ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 4, 10];
  const newArr: number[] = arr.map((ele: number): number => ele * ele);
  console.log(newArr);
}
