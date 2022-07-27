console.log("connecting");


//ques 1
// Write the code to access element which is having id as "text"

const text = document.getElementById('text');
console.log(text.innerText);

//Ques 2
// Write the code to access element which is having tag as "h1"

let head1 = document.getElementsByTagName('h1');
console.log(head1[0].innerText);

//Ques 3
// Write the code to access element which is having class as "box"

const box = document.getElementsByClassName('box');
console.log(box[0].innerText);

//Ques 4
// <h1>Hello </h1>

// Change the heading from "Hello" to "Hello World" using DOM functions


let heads1 = document.getElementsByTagName('h1');
heads1[1].innerText = "Hello World";

//Ques 5
// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function cDirection()
{
    document.getElementsByClassName("container")[0].style.flexDirection='column';
    
}

// Ques 6
//<h1>Hello </h1>

// Add one style attribute and give text color as red and id attribute and give the id value as "heading" in the above given h1 tag using DOM functions

heads1[1].style.color = "red";
heads1[1].id = "heading";
console.log(heads1[1].outerHTML);

//Ques 7
//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

 function replace()
{
    heads1[1].innerText = "Welcome to Elevation academy";
}

//Ques 8
//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

 var times = document.getElementById('tmes');

 
 function updateTime(){
    let currTime = new Date();
    const hr = currTime.getHours();
    const min = currTime.getMinutes();
    const sec = currTime.getSeconds();
    document.getElementById('time').textContent = `hr:${hr} min:${min} sec:${sec}`;
 }
 setInterval(updateTime,500);

//Ques 9
//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

var year = document.getElementById('years');

var yearValue = year.options[year.selectedIndex].text;
document.getElementById('selects').innerHTML = yearValue;

function newYear(){
    yearValue = year.options[year.selectedIndex].text;
    
    document.getElementById('selects').innerHTML = yearValue;
}
