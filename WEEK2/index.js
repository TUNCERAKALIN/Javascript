//Consider the following string:

//let myString = "hello,this,is,a,difficult,to,read,sentence";
// 1.1 Add the string to your file and log it.
let mystring="hello,this,is,a,difficult,to,read,sentence";

// 1.2 Log the length of myString.
console.log(mystring);

// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
var mynewstring=mystring.replace(/,/g,"/");
// 1.4 Log myString to see if you succeeded.
console.log(mynewstring);
// 2. Arrays!

// Consider the following array:

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push("turtle");
// 2.2 Log your new array!
console.log(favoriteAnimals);
// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1,0,"meerkat");
// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
//I didnt understand question!!!
console.log(favoriteAnimals);
// 2.5 Log your new array!
console.log(favoriteAnimals);
// 2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
var myarray2=favoriteAnimals.length;

console.log("The array has a length of:"+myarray2);
// 2.7 Jason does not like 'giraffe', delete this animal from the array.

var index = favoriteAnimals.indexOf("giraffe");
if (index > -1) {
  favoriteAnimals.splice(index, 1);
};
// 2.8 Again log your new array.
console.log(favoriteAnimals);
// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
function finding(element, index, favoriteAnimals) {
    return (element == "meerkat");
  }
  
  
// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
console.log("The item you are looking for is at index:"+favoriteAnimals.findIndex(finding));
// More JavaScript 🎉
// Create a function that takes 3 arguments and returns the sum of the these arguments.
x=5;
y=6;
z=3;
adalet=x+y+z;
console.log(adalet);

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(colorrr){
    console.log("a "+colorrr+" car")
}
colorCar("red");

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const myname="tuncer";
if(myname==="tuncer"){
    console.log("it is tuncer")
}
// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function elma(color,code){
    if(code===1) {
        console.log("a "+color+" car");
    
    }else{
        console.log(color+" motorbike")
    }}
    
elma("blue",1);
// Can you write the following without the if statement, but with just as a single line with console.log(...);?

// if (3 === 3) {
//     console.log("yes")
// } else {
//     console.log("no")
// }
(3===3) ? console.log("yes") : console.log("no");
// Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(vehicle,code,age){
    if(code===1 ) {
        console.log("a "+color+" car");
    
    }else{
        console.log(color+" motorbike")
    }}

// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
var myarray3=[" motorbike"," caravan"," bike"," foot"];
// How do you get the third element from that list?
console.log(myarray3[2]);
// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function armut(color,code,vehiclestype){
if(code<=5 && vehiclestype) {
    console.log("a "+color+" new "+myarray3[vehiclestype+1]);

}else{
    console.log("a "+color+" old "+myarray3[vehiclestype+1]);
}}
armut("green",3,1);
// Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
for (let i=0; i<1 ;i++){
        console.log("Amazing Joe's Garage, we service cars, "+myarray3+".");
    }
// Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
for (let i=0; i<1 ;i++){
    console.log("Amazing Joe's Garage, we service cars, "+myarray3+".");
}
// What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
for (let i=0; i<1 ;i++){
    console.log("Amazing Joe's Garage, we service cars, "+myarray3+", ship"+".");
}
// Create an empty object.
var emptyball=[];
// Create an object that contains the teachers that you have had so far for the different modules.
var emptyball=["yasemin","ali","aktas"];
// Add a property to the object you just created that contains the languages that they have taught you.
var emptyball1={
    yasemin:"english",
    ali:"german",aktas:"russian"
};
console.log(emptyball1);
// Write some code to test two arrays for equality using == and ===. Test the following:
let ayva=[1,2,3];
let seker=[1,2,3];
(ayva===seker) ? console.log("They are same") : console.log("they are different");
//     let x = [1,2,3];
//     let y = [1,2,3];
//     let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
            console.log("they will be different. Because there can be different variables. For there can be two bag named with a, b and that can have same values.");
            // Don't cheat! Seriously - try it first.

// Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.
   //okkkk


// Take a look at the following code:

     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
     console.log(o3);
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o2={foo:'that'};
o1={foo:'bar'};
console.log(o1);
console.log(o2);
console.log(o3);
// Does the order that you assign (o3 = o2 or o2 = o3) matter?
  console.log("I dont think so");
// What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
console.log(typeof typeof(bar));
console.log("it returns string");