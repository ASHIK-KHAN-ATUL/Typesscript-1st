{
  // -----> Access modify
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      //   this._balance
    }
  }

  const goribManusAccount = new BankAccount(123, "mr gorib Ashik", 20);
  //   goribManusAccount.balance = 222;
  goribManusAccount.addDeposit(20);

  const myBalance = goribManusAccount.getBalance();

  console.log(goribManusAccount);
  console.log(myBalance);

  //
}
