//union

type UserRole='admin'| 'user'

const getDashboard=(role:UserRole)=>{
if (role==='admin') {
    return 'admin dashboard'
}else if (role==='user') {
    return 'user dashboard'
}else{
    return 'guest'
}
};

//intersection

type  Employee={
    id:string,
name:string,
phone:number
}
type  Manager={
    
designation:string,
teamSize:number
}

type EmployeeManager=Employee&Manager;

const rafi:EmployeeManager={
    id:'12',
    name:'rafi',
phone:4555,
designation:'jhg',
teamSize:20
}
