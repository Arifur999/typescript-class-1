// oop : instance of type guard type narrowing


class Person{
    name:string;

    constructor(name:string){
        this.name=name;
    }

    getSleep(numberOfhours:number){
        console.log(`${this.name} to ${numberOfhours}`);
    }
}

class Student extends Person{
    constructor(name:string){
        super  (name);
    }

    doStudy(hours:number){
        console.log(`${this.name} to stardy ${hours}`);
    }
}


class Teacher extends Person{
    constructor(name:string){
        super(name)
    }


      takeClass(numberOfClass:number){
        console.log(`${this.name} to stardy ${numberOfClass}`);
    }
}

//------------------------------------------------------
//function guard

const isStudent=(user:Person)=>{
    return user instanceof Student;   // true  or false
}

const isTeacher=(user:Person)=>{
    return user instanceof Teacher;
}



const getUserInfo =(user:Person)=>{
    if (isStudent(user)) {
        user.doStudy(60)
        
    }else if(isTeacher(user)){
        user.takeClass(5)
    }else{
user.getSleep(5)
    }

}


const student1=new Student('Mr .X')
const teacher1=new Student('Mr .teacher')
const parson1=new Student('Mr .parson')


getUserInfo(student1)
getUserInfo(teacher1)
getUserInfo(parson1)