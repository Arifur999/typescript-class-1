// keyof :type operation

type RichVehicle={
car:string;
bike:string;
cbg:string
};


type MyVehicle='bike'| 'car'| 'cng'  // aro vlo bahe lekkha jay..ex

type MyVehicle2=keyof RichVehicle;


//------------------------------------------------


type User={
    id: number;
    name: string;
    address:{
        city:string;
    };

};

const user:User={
    id:222,
    name:'arif',
    address:{
        city:'dhaka'
    }



}
const getPropertyFromObj=<X>(obj:X,key: keyof X)=>{
    return obj[key];
}

const result=getPropertyFromObj(user,'id')

