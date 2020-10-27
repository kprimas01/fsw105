function greaterThenFive(arr){
return  arr.filter(num => num   > 5 )

}

var array = [3, 6, 8, 2]

console.log(greaterThenFive(array))
// 
function evensOnly(arr){
    return  arr.filter(num => num   < 5 )
    
    }
    
    var array = [3, 6, 8, 2]
    
    console.log(evensOnly(array))
    // 
function doubleNumbers(arr){
    return arr.map(num => num * 2)
}
console.log(doubleNumbers([2,5,100]));
// 
function stringItUp(arr){
    return arr.map (num =>num+ "")
}
console.log(stringItUp([2,45,100]))

//
function capitalizeNames(arr){
    return arr ( john, jacob, jinGlenHeimer, schmidt)
} 
console.log(capitalizeNames(["john","jacab","jinGlenHeimer","schmidt"]));

    