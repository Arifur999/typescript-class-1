class Common{
     name:string;
     age:number;
     address:string;

       constructor( name:string, age:number, address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }


isRead(hours:number){
    console.log(`${this.name}read an ${hours}`);
}

}



class Student extends Common{
    // name:string;
    // age:number;
    // address:string;


}

const student1=new Student('x',18,'bangladesh')

student1.isRead(15);


class teacher extends Common{

designation:string;
constructor(name:string,age:number,designation:string){

    super(name,age,designation)
    this.designation=designation
}
takeClass(numClass:number){
    console.log(`${this.name} ${numClass}`);
}

}

const teacher1=new teacher(
    'x',25,'senior'
);
teacher1.takeClass(4);