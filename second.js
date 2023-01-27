//1. map()
let array= [1, 2, 3, 4, 5];
let newArray =[];
for(let i=0;i<array.length;i++){
    newArray[i]=array[i]*array[i];
}
console.log(newArray);

let array1=[5,10,15,20];
function functionforMap(element){
    return element*element;
}
let newArray1 = array.map(functionforMap);
console.log(newArray1);

let array2=[5,10,15,20];
let newArray2 = array2.map((element) => element * element);
console.log(newArray2);

//in js a function is also a js object

// 2.. forEach()

let array3 =[1,2,3,4,5];
array3.forEach((element,index) => {
    element *= element;
    console.log(element);
})
console.log("Array is : ", array3);

// 3 .filter()

let array4=[10,20,30,40,50];
let newArray4 = array.filter((element) => element >= 30);
console.log(newArray4);

// 4.. .find()


let array5 =[10,20,30,40];
let temp = array5.find((value) => value > 20);
console.log(temp);

// 5.. .sort()

let array6=[50,40,80,5,10];
let sortedArray = array.sort((el1,el2) =>{
    el1= Number(el1);
    el2 = Number(el2);
    return el1-el2;
});
console.log(sortedArray);

// 6.. object destructuring 

let details = {
    name : "Alex",
    age: 24,
    address: {
        street : "Broklyn",
        city : "New York",
        state: "NY",
        country: "USA",
        passportDetails:{
            passportNumber:"ABCD1234",
        },
    },
};
console.log(details.address.passportDetails.passportNumber);
//let myName = details.name;
//let age = details.age;
//console.log(myName,age);
let{name,age} = details;
let{passportNumber,country}=details;
console.log(name,age)

// 7..arraymatching

//if(array1==array2);

//8..objectmatching

let obj1 = {name:"Anjali", age : 24};
let obj2 = {name:"Anjali"};

function areEqual(obj1,obj2){
    if(obj1 == obj2){
        return true;
    }
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    for(let key of Object.keys(obj1)){
        if(typeof obj2[key] == "underfined"){
            return false;
        }
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1,obj2));

// // Map and Set

let map = new Map();
map.set(1,"Sanatanu");
map.set(2,"Alex");
console.log(map);
map.values();

let set = new Set();
set.add(1);
set.add(-1);
let arr = [...set]
console.log(set);
set.has();

//Classes

class Animal {
    noOflegs;
    color;
    family;
    sound;

    constructor(noOflegs , color,family,sound){
        this.noOflegs = noOflegs;
        this.color = color;
        this.family=family;
        this.sound=sound;

    }
    showAnimal(){
        console.log(`The animal belongs to family ${this.family}`);
    }
}
let animal = new Animal(4,"brown", "rodent","phew phew");
console.log(animal);
animal.showAnimal();