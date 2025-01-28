const { response } = require("express");

const newPromis = new Promise(function(response, reject){
    setTimeout(function(){
        console.log("entered in promiss");
        response();
    }, 2000)
 
})

newPromis.then(function(){
    console.log("geting data")
})






const newPromisOne = new Promise(function(response, reject){
    setTimeout(function(){
    console.log("entered in promiss one");
    response();
}, 2000)

}).then(function(){
    console.log("geting data one")
})





const newPromisTwo = new Promise(function(response, reject){
    setTimeout(function(){
    console.log("entered in promiss tow");
    response({username: "alshan", email: "alishan@gmail.com"});
}, 2000)

}).then(function(user){
    console.log("geting data two" , user)
})




const newPromisThree = new Promise(function(response, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            response({username: "alshan", email: "alishan@gmail.com"});
        }
        else{
            reject("ERROR: SOMETHING WEnt wrong");
        }
}, 2000)

}).then(function(user){
    console.log(user.username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("prommiss eighter reject or resolve"))






const newPromisFive = new Promise(function(response, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            response({username: "alshan", email: "alishan@gmail.com"});
        }
        else{
            reject("ERROR: SOMETHING WEnt wrong-------");
        }
}, 2000)

})

async function consumeFun(){
    try {
        const resp = await newPromisFive;
        console.log(resp)

    } catch (error) {
        console.log(error)
    }
}

consumeFun()




async function getAllUser(){
    try {
        const response = await fetch('')

        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}



fetch('')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})