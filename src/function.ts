//function 
//arrow function , normal function



//normal
function addNormal (num1:number,num2:number){    //type defind kora 
return num1+num2
}

addNormal(2,2)
console.log(addNormal);


// arrow

const addArrow =(num1:number,num2:number)=>{
    return num1+num2
}
console.log(addArrow);


//object => function=> method

// normal
const poorUser={
    name :"arif",
    balance:0,

    addBalance(value:number):number {
        const totalBalance=this.balance+value;
        return totalBalance
    }
};
poorUser.addBalance(5000)

//loop=call back function
const arr:number[]=[1,4,8,];
const sqrAttay=arr.map((element:number):number=>{
    return element*element
})

