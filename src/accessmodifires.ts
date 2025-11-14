class BankAccount {
  public readonly userId: number;
  public userName: string;
//   private userBalance: number;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
addBalance(balance:number){
    this.userBalance=this.userBalance+balance
}


}


const myAccount =new BankAccount(111,"arif",8880);

myAccount.addBalance(100)

console.log(myAccount);









//------------------------

// class StudentAccount extends BankAccount{
//     test(){
//         this.userBalance
//     }
// }