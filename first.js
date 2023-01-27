//Types of variable

//const
const myName = [];
console.log(myName);
myName.push("Alex");
console.log(myName);

//let
let myName1 ="John";
console.log(myName1);
 myName1="alex";
console.log(myName1);

//var
var myName2="alex";
console.log(myName2);
myName2=5;
console.log(myName2);


//String Interpolation

let firstName = "Anjali";
let lastName = "Singh";
//let fullname = firstName+ " " + lastName ;
//console.log(fullname)
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(firstName);


 

// Default parameters

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

console.log(addTwoNumbers(1,2));


let addTwoNumbers = (num1,num2) => num1+num2;
console.log(addTwoNumbers(1,2));

let addTwoNumber = (num1,num2=5) => {
       console.log(num1);
       console.log(num2);
    return num1+num2;
};

 console.log(addTwoNumber(1,2));
 console.log(addTwoNumber(1));

// Rest and spread operator are applicable in arrays and objects 
//spread(to expand) ->...(three dot)

let array=[10,20,30,40,50];
console.log(...array);
console.log(array);
let newArray = [...array,30 ,40 ,50];
console.log(newArray);
console.log(...newArray);

//rest operators

let maxOfNumbers = (...numbers) => {
    let maximum = Number.MIN_VALUE;
    for (let number of numbers) {
        maximum = Math.max(maximum, number);
        }
        return maximum;
};
console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));

// Spread for object
let object = {
    name: "John",
    age: 24,
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
    },
   
};
//let object2 = JSON.parse(JSON.stringify(object));
let object2 = {...object, country: "USA", favoritesong:"Numb by Linkin Park"};
let object3 = {...object, name:"Shantanu"};
console.log(object);
console.log(object2);
console.log(object3);