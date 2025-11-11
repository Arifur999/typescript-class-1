//  const friends:string[]=["x","y","z"]

// sem or                    2tai same
const friend:Array<string>=['x','y','z'];

// --------------------------

// const rollNumber:number[]=[4,8,9]
//or
const rollNumber:Array<number>=[4,8,9];

//------------------------------
// const isEligible:boolean[]=[false,true,false];
//-or
const isEligible:Array<boolean>=[true,false,true];

/////////----------------------------------------------

// generics

type GenericArray <value>=Array< value> //generic type kore sobr modde use kora jay

const friend1:GenericArray<string>=['x','y','z'];


const rollNumber1:GenericArray<number>=[4,8,9];


const isEligible1:GenericArray<boolean>=[true,false,true];


//-------------------------------------

// type Coordinates=[number,number]
type Coordinates<X,Y>=[X,Y]  //value use kore generic er maddome onno type er valu ke o dora jay ekta peramitaer diye

const coordinates1:Coordinates<number,number>=[20,30]
const coordinates2:Coordinates<string,string>=['20','30']


//object generic

const userList:GenericArray<{name:string; age: number}>=[{
    name:'w',
    age:20,
},
{
    name:'t',
    age:40
}
]