{
  // -----> Getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // public getBalance() {
    //   return this._balance;
    // }

    // -----------------> use of Getter
    get balance() {
      return this._balance;
    }
  }

  const goribManusAccount = new BankAccount(123, "mr gorib Ashik", 56);

  //   goribManusAccount.deposit = 222;
  //   goribManusAccount.addDeposit(20);
  //   const myBalance = goribManusAccount.getBalance();
  //   console.log(goribManusAccount);

  const myBalance = goribManusAccount.balance;
  console.log("My balance : ", myBalance);
}
