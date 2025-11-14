//oop class object

 class Animal{
    // public name:string;
    // public species:string;
    // public sound:string


    constructor (public name:string,public species:string,public sound:string){    //public diye atake global kora jay
        this.name=name
        this.species=species
        this.sound=sound
    }

//method

makeSound(){
    console.log(`${this.name} is making sound ${this.sound}`);
}


 }


 const dog =new Animal('dogesh',"dog","meow")

 console.log(dog);