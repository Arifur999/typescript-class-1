//utility type

type Product={
    id:number;
    name:string;
    price:number;
    stock:number;
    color?:string


} ;
type ProductSummary=Pick<Product, 'id'|'name'| "price">  //aie item gula diye new object toiri kora hoy pick diye

type ProductStock=Omit<Product,"stock"|'color'>  //Omit use kore j key deya hoy ota bad diye ekta new object kore dey


type ProductColor=Required<Product>   //sov type required hoye jabe

type OptionalProduct=Partial<Product>    //partial er maddome sov gula type optional hoye jabe



type ProductReadOnly=Readonly<Product>   //readonly use korle sov r value chg kora jay na only read only thake




const emptyObj:Record<string,unknown>={}   // record er maddome amra jani sov smy bam paser key string hoy and dan pase value hoy atai difind kore record er madome

type Product1={
    id:22;
    name:"X";
    price:850;
    stock:12;
    color?:'red'


} ;