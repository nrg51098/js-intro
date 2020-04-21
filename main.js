console.log("JS-intro");

const adder = (num)=>{

    console.log(`${num + 42}`);
}


adder(32);



const ageIn2099 = (year) => {
    console.log(`Age in 2099 will be ${2099 - year}`);
}

ageIn2099(1983);


// const factorial = (num) => {

//     if(num === 1){
//         return 1;
//     }else { 
//     return num * factorial(num - 1);
//     }
// }
// console.log(factorial(10));



const arr = ["nikhil","Luna", "sam", "tara", "giao"];

const finder = (arr1, ind) => {
    return arr1[ind];
}

console.log(finder(arr, 1));


const LunaFinder = (arr1) => {
    // arr1.array.forEach(element => {
    //     if (element.toUpperCase() === "LUNA"){
    //         return true;
    //     }
    //     return falser;
    // });
    
   return arr1.includes("Luna");
}

console.log(LunaFinder(arr));


