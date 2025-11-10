// ? => ternary operator: decision making
//?? => nullish coalescing operator  => NULL/UNDEFINED
// ? => optional chaining



const eligible=(age:number)=>{
// if (age>=21) {
//     console.log( 'eligible ');
// }else{
//     console.log('not eligible');
// }
// }
// eligible(20)


// --------------------------
//ternary

const result =age >=21?'eligible':'not eligible'}

//----------------------------
// nullish coalescing operator

const userTheme=undefined;
const selectedTheme=userTheme?? 'light theme'

//------------------------------

//optional chaining

const user:{
 address:{
    city:string,
    town:string,
    postal?:string;
 },

}={
   address:{
    city:'dhaka',
    town:'dhaka'
   }


}
const postalCode=user?.address?.postal;
console.log(postalCode);