//nullable
//Unknown
//Never

//nullable type

const getUser =(input:string|null)=>{
    if (input) {
        console.log(`from db ${input}`);
    }else{
        console.log('all user');
    }
}

getUser(null)

// ----------------Unknown-------------------
// const discountCalc=(input: string|number)=>{     atay sov type asbe na jar karone error asbe
const discountCalc=(input: unknown)=>{          //soled

if (typeof input==='number') {
    const discountPrice=input*0.1;
    console.log(discountPrice);
    
}else if( typeof input === 'string'){
    const [discountPrice]=input.split(' ');
    console.log(Number(discountPrice)*0.1);
}else{
    console.log('wrong input');
}

}


discountCalc(100)
discountCalc('100 tk')
discountCalc(null)



//-----------void/never-------------

const thowError=(msg:string ):never=>{
    throw new Error(msg)

}