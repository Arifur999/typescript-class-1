// IN TYPE OF

type Alphaneumeric=number|string



const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {  /// type narrow ba type guard
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
};


// in guard


type NormalUser={
    name:string;
};

type AdminUser={
    name:string;
    role:"admin"
}

const getUserInfo=(user:NormalUser|AdminUser)=>{
    if ("role" in user) {                // in key word  .type guard
        console.log(`This ${user.name}and his role is ${user.role}`)
    }else{
        console.log(`${user.name}`);
    }
}

getUserInfo({name:"normal"})
getUserInfo({name:"normal",role:"admin"})