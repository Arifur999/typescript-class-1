//  spread operator
 
// array

 const friends =["sakib","mahib","ibrahim"]

 const newFriends=["farabi","sumon"]

 friends.push(...newFriends)

// object
const user={
    name:"arif",
    phone:'01255544565',


};
const other={
    hobby:'ride',
    color:"black",
}

const fullInfo={...user,...other}

console.log(fullInfo);

//rest operator

const inviteFriends=(...friends:string[])=>{

friends.forEach((friend:String)=>{
console.log(friend);
})

}
inviteFriends("sakib","ibrahim","fuhad")
