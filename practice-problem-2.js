/*========================
        Problem 02
Question - Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
===========================*/

var math            = 75.75;
var biology         = 65;
var chemistry       = 80;
var physics         = 35.45;
var bangla          = 99.50;

var totalNumber     = math + biology + chemistry + physics + bangla;
var avarageNumber   = totalNumber / 5;
console.log(avarageNumber.toFixed(2));