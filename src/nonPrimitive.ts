//array,object
//


//string type array 

let list=['eggs','milk','sugar']

//number type array

let price=[10,20,30]

//number | string type array

let listPrice=["eggs",10,"milk",20,"sugar",30]


//trople

let coordinates:[number,number]=[20,30]
let couple:[string,string]=["husband","wife"]
let nameRoll:[string,number]=["arif",10]
let destination:[string,string,number]=["dhaka","noakhali",3]



//reference type : object

  const user:{
    firstName:string;  //type defiend
    midddleName?:string;  //optional (value thakte o pare nao pare)  ......type difend korle obossoi valu dite hoy .r jodi value na theke tobe optional dite hobe
    lastName:"Rahman"; // value take type hisebe use kora hocce jar karone atat value change kora jabe na  +> atake literal type bole
//   readonly lastName:string  ---ata diye string a rekhe o vale change kora jay na atake access modifier bole


} ={
    firstName:"Arif",
    lastName:"Rahman",
  }


  user.firstName="arifur"   //change value
  

