// //Promise is a class in js
// //constructor()

let myPromise = new Promise((fullfilled, notfullfilled) =>{
    let num1 = 10;
    let num2 = 20;
    let sum = num1+num2;
    if(sum> 24) {
        fullfilled();
    }
    else{
        notfullfilled()
    }

});
myPromise.then(( ) => {
    console.log("Promise fullfiled")
});//fullfiled
myPromise.catch(()=> {
    console.log("Promise not fullfilled")
})//notfullfilled


//Unexpected behaviour of js
function addTwoNumbers(num1,num2){
    let sum =0;
    setTimeout(() => {
        console.log(num1+num2);
        sum = num1+num2;
    },5000);
    console.log("Inside addTwoNumbers");
    return sum;
}

console.log(addTwoNumbers(2,4));


//Using both fullfilled notfullfilled
function addTwoNumbers(num1,num2){
return myPromise = new Promise((fullfilled, notfullfilled) =>{
   setTimeout(()=> {
    console.log("Inside settimeout");
    fullfilled(num1+num2);
   },5000);
   notfullfilled(new Error("An error occured"));
});
}
addTwoNumbers(10,5)
.then(()=> {
    console.log("Promise fullfilled");
})
.catch(()=> {
    console.log("Promise not fullfilled");
});


// Only fullfilled 
function addTwoNumbers(num1,num2){
    return myPromise = new Promise((fullfilled, notfullfilled) =>{
       setTimeout(()=> {
        console.log("Inside settimeout");
        fullfilled(num1+num2);
       },5000);
    });
    }
    addTwoNumbers(10,5)
    .then(()=> {
        console.log("Promise fullfilled");
    })
    .catch(()=> {
        console.log("Promise not fullfilled");
    });

    