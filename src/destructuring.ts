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



// const myFriends=classFriends[2]

// console.log(myFriends);