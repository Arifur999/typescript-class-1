let anything:any;

anything='arif';
//----------------------------
const kgToGram=(input:string| number):string | number |undefined=>{
    if (typeof input=== "number") {
        return input*1000;

        
    }else if(typeof input==='string'){
const [value]=input.split(" ");
return `converted output is:${Number(value)*1000}`


    }
}
const result1=kgToGram(2) as number;
console.log(result1);
const result2=kgToGram("2 kg")as string;
console.log(result2);

//--------------------------------------
//ex


type CustomError={
    message:string;
}
try{

}catch(err){
    console.log((err as CustomError).message);

}



