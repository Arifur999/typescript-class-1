class BankAccount {
  public readonly userId: number;
  public userName: string;
//   private userBalance: number;
  private userBalance: number;    //encapsulation

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
private addBalance(balance:number){
    this.userBalance=this.userBalance+balance
}

callHiddenMethod(balance:number){
    this.addBalance(balance)
}


}


const myAccount =new BankAccount(111,"arif",8880);

// myAccount.addBalance(100)

console.log(myAccount);