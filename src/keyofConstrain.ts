// keyof :type operation

type RichVehicle={
car:string;
bike:string;
cbg:string
};


type MyVehicle='bike'| 'car'| 'cng'  // aro vlo bahe lekkha jay..ex

type MyVehicle2=keyof RichVehicle;