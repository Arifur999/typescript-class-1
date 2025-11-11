interface Developer <T>{
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        release:string
    };
    smartWatch:T;
}


const poorDeveloper:Developer <{
    heartbit:string;
    stopwatch:boolean
}>={
    name:'x',
    salary:20000,
    device:{
brand:'lenobo',
model:'a21',
release:'2028'
    },
    smartWatch:{
        heartbit:'100',
        stopwatch:true
    }
}
const richDeveloper:Developer <{
    heartbit:string;
    stopwatch:boolean;
    call:boolean
}>={
    name:'y',
    salary:60000,
    device:{
brand:'lenobo-bo',
model:'a2120',
release:'2050'
    },
    smartWatch:{
        heartbit:'100',
        stopwatch:true,
        call:true
    }
}