const redux = require("redux")
// usuallly we don't want to create a variable and set it to = the object we try to deal with like below instead we use something called action creators..actually acton creator is a function whose job is to return the object we care about
/*const action = {
    type: "INCREMENT"
}*/
// usually we name it as same as the name of the type but with js function naming convention means lower case
function increment(){
    return{
        type: "INCREMENT"  
    }
}
// i nee to call the function to writen the property
increment()
console.log(increment())