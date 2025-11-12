//generic function

// const createArrayWithString=(value:string)=>[value];



// const createArrayWithNumber=(value:number)=>[value];



// const createArrayWithUserObject=(value:{id:number;name:string})=>{
//     return [value];
// }


// uporer sov gula generic diye ezly koro jay..

const createArrayWithGeneric=<T>(value:T)=>{
    return [value]
}
    
// const arrString=createArrayWithString('apple');
// const arrNumber=createArrayWithNumber(1225);
// const arrObj=createArrayWithUserObject({
//     id:123,
//     name:'level 2'

// })



const arrString=createArrayWithGeneric('apple');


//-----------------------------------

// normal

const createArrayWithTuple=(param1:string,param2:string)=>[param1,param2]


//generic 


const createArrayTuple=<X,Y>(param1:X,param2:Y)=>[param1,param2]

//ex
const res1= createArrayTuple ('arif',false)

//ex
const res2=createArrayTuple(222,{id:222,name:'arif'})


//

const addStudentCourse=<T>(studentInfo:T)=>{

    return{
        course:"level2",
        ...studentInfo
    }
}


const student1={
    id:123,
    name:'arif',
    hasPan:true
}
const student2={
    id:23,
    name:'x',
    isMarried:true
}


const result =addStudentCourse(student1);
console.log(result);