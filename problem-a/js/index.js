'use strict';
/** Basic Types */

//Define a new variable `motto` for the value "The iSchool is my school"
let motto = "The iSchool is my school";

//Log out the motto
console.log(motto);


//Define a variable `mottoLength` that stores the length of the motto.
//Use the `.length` property
let mottoLength = motto.length;

//Log out the length.
console.log(mottoLength);


//Use the `indexOf()` String method to see if the word "cool" is in the string.
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods
let containsCool = motto.indexOf("cool") !== -1;

//Log out a _boolean_ whether it is or not.
console.log(containsCool);

//Use a String method to replace the word "iSchool" in the `motto` variable with
//the words "Information School". The new value should be re-assigned to the
//`motto` variable.
motto = motto.replace("iSchool", "Information School");

//Log out the updated motto.
console.log(motto);

//Calculate the ratio between the length of the updated motto and the length of 
//the old (which you had saved in a variable!). Log out this ratio as a 
//percentage with two decimal places of precision (e.g., `"123.45%"`).
//You can use the `.toFixed()` Number method to specify the precision. 
let updatedMottoLength = motto.length;
let ratio = ((updatedMottoLength / mottoLength) * 100).toFixed(2) + "%";
console.log(ratio);


/** Arrays **/
//Create an array `numbers` that contains these 10 numbers:
//    1 4 1 5 9 2 6 5 3 5
let numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

//Log out the array.
console.log(numbers);


//Use bracket notation to change the `4` in the array to a `4.2`.
numbers[1] = 4.2;

//Log out the updated array.
console.log(numbers);

//Add the number 3 to the END of the array.
numbers.push(3);

//Log out the updated array.
console.log(numbers);

//Find the median (middle) value of the numbers in the array.
//Hint: sort() the array, then access the middle index of the sorted values.
//You can use the `Math.floor()` function to round to a whole number.
numbers.sort(function(a, b) { return a - b });
let middleIndex = Math.floor(numbers.length / 2);

//Log out the median value.
console.log(numbers[middleIndex]);

/** Objects **/

//Create a variable `rect` that represents a rectangle. This should be an Object
//with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50
let rect = {
  x: 30,
  y: 50,
  width: 100,
  height: 50
};

//Log out the rectangle object
console.log(rect);

//Log out the x- and y- coordinates of the rectangle (its location). Your output 
//should have the format `"X, Y"`.
console.log(rect.x + ", " + rect.y);

//Set the rectangle's height to be the square root of its width. (Use the 
//`Math.sqrt()` function).
//Use *dot notation* to access the properties!
rect.height = Math.sqrt(rect.width);

//Log out the rectangle's area. Use *dot notation* to access the properties!
console.log(rect.width * rect.height);

//Create a variable `circle` that represents a circle. This should be an object
//with properties:
//  `cx` (center-x-coordinate) of 34, 
//  `cy` of 43,
//  `radius` equal to the LAST value in the (sorted) `numbers` array.
let circle = {
  cx: 34,
  cy: 43,
  radius: numbers[numbers.length - 1]
};

//Log out the circle
console.log(circle);

//Create an array `shapes` that represents a list of shapes. The array should
//contain the rectangle and the circle objects defined above.
let shapes = [rect, circle];

//Log out the variable. Be sure to inspect it in the developer console!
console.log(shapes);

//Add a new ANONYMOUS object (e.g., one passed in directly without its own
//variable name) representing a right triangle to the `shapes` array.
//The triangle should have a `base` of 33 and a `height` of 44.
shapes.push({
  base: 33,
  height: 44
});

//Log out the updated shapes array.
console.log(shapes);

//Log out the triangle's `hypotenuse` property (don't calculate it, just log out
//the current property value!). What do you get?
console.log(shapes[2].hypotenuse);

//Assign the triangle inside the `shapes` array a 'hypotenuse' property of `55`.
shapes[2].hypotenuse = 55;

//Log out the `shapes` array again.
console.log(shapes);

//Visually check: what happens if you inspect the previously logged array in the 
//Chrome developer console?
// It seems to show the value that we just changed. 
