var globalVariable = "I am in global scope";

function myFunction(){
    var localVariable = "I am in local scope";
    // this fn can access ti the globalVariable
    console.log(localVariable);
    if(true){
        let blockVariable = "I am in a block scope";
        //this is limited to the block( for , if)
        console.log(blockVariable);
    }
    // this is limited to the fn
    console.log(localVariable)
}

myFunction();

// name,age,gender

let student1 = {
    name:"Alex",
    age: 26,
    gender: "Male"
}

console.log(student1);

let footballPlayer = {
    name: "Ray Lewis",
    jersey : 52,
    NFL_team: "Ravens",
    time_played : "15 years",
    status: "Hall of fame"
}

console.log(footballPlayer);