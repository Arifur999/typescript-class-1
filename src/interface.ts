type User ={           //type define
    name:string,
    age:number,
}
type Role={           //type define
    role:"admin" | "user"
}

type UserWithRole=User & Role;

const user1 : UserWithRole={
    name:"x",
    age:20,
    role:"admin",
}

// interface => object type array,function 

interface IUser {
    name:string,
    age:number,
}

interface IsUserWithRole extends IUser{
    role:"admin"| "user"
}


const user2 : IsUserWithRole={
    name:"y",
    age:30,
    role:'user'
}


///------------------boolean----------------------------
 type IsAdmin=boolean;
 const isAdmin:IsAdmin=false;


 //function

 type Add =(num1:number,num2:number)=>number;

 interface IAdd{

    (num1:number,num2:number):number
 }



 const add:Add =(num1,num2)=>num1+num2;

 type Friends=string[];

 interface IFriends{
    [index:number]:string;

 }

 const friends:IFriends=['a','b','c','d']

 