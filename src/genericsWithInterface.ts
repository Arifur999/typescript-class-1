interface Developer <T,V=null>{
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        release:string
    };
    smartWatch:T;
    bike?:V
}

interface LocalWatch{
 heartbit:string;
    stopwatch:boolean
}

interface BrandWatch{
    heartbit:string;
    stopwatch:boolean;
    call:boolean
}


const poorDeveloper:Developer <LocalWatch>={
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
const richDeveloper:Developer <BrandWatch>={
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