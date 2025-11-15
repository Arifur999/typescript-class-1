//polymorphism


class Person{
    getSleep(){
        console.log(`i am normal person`);
    }


}

class Student extends Person{
    getSleep() {
        console.log(`i am student`);
    }
}


class Teacher extends Person{
    getSleep() {
        console.log(`i am Teacher`);
    }
}

const getPerson =(param:Person)=>{

}



const person1=new Person();
const person2=new Student()
const person3=new Teacher()


getPerson(person1)
getPerson(person2)
getPerson(person3)



//ex

class Shape{
    getArea(){
        return 0;
    }
}

class Circle extends Shape{
    radius:number;


constructor(radius:number){
    super()
    this.radius=radius;
}

getArea(): number {
    return Math.PI*this.radius*this.radius;
}

}

class Rectangle extends Shape{
    height:number;
    width:number;



    constructor(height:number,width:number){
        super()
        this.height=height;
        this.width=width;
    }

    getArea(): number {
        return this.height*this.width;
    }
}


const getArea =(params :Shape)=>{
   console.log (params.getArea());
}

const shape1=new Shape();
const shape2=new Circle(10)
const shape3=new Rectangle(10,20)

getArea(shape1)
getArea(shape2)
getArea(shape3)