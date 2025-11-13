//mapped type
//map

const arrayOfNum:number[]=[1,2,3,6,9];

const arrayOfString :string[]=['1','2','3','6','9'];

const arrayOfStringUsingMap:string[]=arrayOfNum.map((num)=>num.toString());
console.log(arrayOfStringUsingMap);

//-------------------------------------

type AreaOfNum={
    height:number;
    width:number;
}
// type AreaOfString={
//     height:string;
//     width:string;
// }

//mapped
type height =AreaOfNum['height']

type Area<T>={
    // [key in 'height' | 'width']:string;
     [key in keyof T]:T[key];           //more update with generic
};

const aria1:Area<{height:string;width:number}>={
    height:'200',
    width:300

}

