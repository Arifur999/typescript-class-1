// type Alias

type User={
     id:number,
    name:{
        firstName:string,
        lastName:string
    }
    gender:'male'| 'female',
    contactNo:number,
    address:{
        division:string,
        city:string,

    }
}








const user1:User={
id:12,
name:{
    firstName: 'mr',
    lastName:'doe'
},
gender:"male",
contactNo:1555665,
address:{
    division:"dhaka",
    city:"dhaka"
}
}
const user2:User={
id:12,
name:{
    firstName: 'mr',
    lastName:'doe'
},
gender:"male",
contactNo:1555665,
address:{
    division:"dhaka",
    city:"dhaka"
}
}
const user3:User={
id:12,
name:{
    firstName: 'mr',
    lastName:'doe'
},
gender:"male",
contactNo:1555665,
address:{
    division:"dhaka",
    city:"dhaka"
}
}





//----------------------------------**---------------

//function

type addFunc=(num1:number,num2:number)=>number

const add :addFunc =(num1,num2)=>num1+num2