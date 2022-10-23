// 1 amocana
let number = [ 5, 25, 89, 120, 36];
number.push('javascript','python');
number.unshift('html','css');
console.log(number);
number.splice(0,1,0);
number.splice(-1,1,0);
console.log(number);

// 2 amocana
let fruit = ['orange','banana','pear'];
fruit.push('apple','pineapple');
fruit.unshift('watermelon');
fruit.splice(3,0,'mango');
fruit.splice(0,1,);
fruit.splice(5,1,);
for ( let item of fruit)
console.log(item)


// 3 amocana 
let mapnumbers = [12, 25, 3, 6, 8, 14, 7, 23];
let mapnewarray = mapnumbers.map(function(item) {
    return item / 3;
})
console.log(mapnewarray);


// 4 amocana
let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let res = array.filter( x = Number);
console.log(res);


// 5 amocana
let courses = ["html", "css", "javascript", "python", "php"] ;
let newcourses = courses.filter ((x) => x.length > 3);
console.log(newcourses);


// 6 amocana
let arrayd = [12, "google", 32, null, "yahoo", 25];
let newArrayv = arrayd.map(function(item) {

    if (typeof item  == "string") {
        return item.toUpperCase();
    }
    else if (typeof item  == "number") {
        return Math.pow(item,2);
    }
    else {
        return item;
    }
}
)
console.log(newArrayv);

// 7 amocana
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let mm = words.filter ( (x) => x.includes("m") ||  x.includes("M"));
console.log(mm);

// 8 amocana
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let arr123 = arr1.concat(arr2,arr3)
console.log(arr123)

// 9 amocana
let arr = [1, 2, 3, 4, 5];
let sum = 0;
let ar = arr.forEach (function(item){
 sum = sum + item;
});
console.log(sum);

// 10 amocana
let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
let positivenumbers = numbers.filter( (x) =>  x > 0);
console.log(positivenumbers) ;

// 11 amocana
let somearr = [-1, -2, -3, 4].some(function(z){
    return z > 0;
})
console.log(somearr);
// 12 amocana 
let arRay =[23,45,32,5,87,7,3,98];
arRay.sort (function(x,y){
    return (y - x)

})
console.log(arRay)
let min = arRay.sort ( (x,y) => x - y )[0];
console.log(min);

// 13 amocana 
let aRray =[1, 2, 3, 4, 5];
aRray.splice (2,0,"a","b","c" )
console.log(aRray);













