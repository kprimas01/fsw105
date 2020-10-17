var peopleWhoWanToSeeMadMaxFuryRoad = [
    {
        name: "mike",
        age:12,
        gender:"male",
    },{
    name: "Madeline",
    age:80,
    gender:"female",
    },{
        mane:"cheryl",
        age:22,
        gender:"female"
    },{
        name:"Sam",
        age:"30",
        gender:"male",
    },{
        name:"Suzy",
        age: 4,
        gender:"female"




    }
]

function movie(){
    for(var i = 0; i <peopleWhoWanToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWanToSeeMadMaxFuryRoad[i].age>=18){
console.log("oldenough")

    }
    else{
        console.log("notoldenough")
    }
}
}
movie()