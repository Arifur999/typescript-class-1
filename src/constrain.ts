// constrain : strict rule deya

//clean code

type Student={id:number,name:string}



const addStudentCourse=<T extends Student >(studentInfo:T)=>{

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