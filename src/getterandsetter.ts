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

  //balance set
// addBalance(balance:number){
//     this.userBalance=this.userBalance+balance
// }


//use setter

set addBalance(amount:number){
    this.userBalance=this.userBalance+amount
}


// getBalance(){
//     return this.userBalance
// }



//use getter

get  getBalance(){
   return this.userBalance
}

}


const myAccount =new BankAccount(111,"arif",8880);

// myAccount.addBalance(100)  //function call

// console.log(myAccount.getBalance());     ///function call


myAccount.addBalance=100
myAccount.addBalance=200

console.log(myAccount.getBalance);











//------------------------

// class StudentAccount extends BankAccount{
//     test(){
//         this.userBalance
//     }
// }