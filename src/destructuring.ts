//object destructuring

const user={
    id:1,
    name:{
        firstName:"arif",
lastName:"Rahman"

    },
    color:"red"

}

const {color,name:{lastName}}=user


//array destructuring

const classFriends=["rohim","rafi","nafi"]

const [,b,c]=classFriends //skip kora jay..

//a,rohim,b te rafi,c te nafi

// const myFriends=classFriends[2]

// console.log(myFriends);