const expense ={
    id : 1,
    location: "Subway",
    date: "12/12/12",
    price: 1222,
    coworkers : ["sam", "don", "sia"]

}

const pricechecker = (obj) =>{

    if(obj.price > 1500){
        obj.approved = false;
    }
    else {
        obj.approved = true;
    }
}


pricechecker(expense);
console.log(expense);