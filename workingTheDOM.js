// ============================================================
// HOMEWORK 5: Working the DOM
// Stan Horvath | Intro to Media
// ============================================================

// 1. Change the text content of the <h1> element to "DOM Manipulation"
document.getElementById("title").textContent = "DOM Manipulation";

// 2. Change the background color of the <div> element with the id "container" to "lightblue"
document.getElementById("container").style.backgroundColor = "lightblue";

// 3. Select the <ul> element and add a new <li> element with the text content "Item 7" to the list
let ul = document.querySelector("ul");
let newItem7 = document.createElement("li");
newItem7.textContent = "Item 7";
ul.appendChild(newItem7);

// 4. The first item should have crimson text
let firstItem = document.querySelector("ul li:first-child");
firstItem.style.color = "crimson";

// 5. The third item should have a pink background
let thirdItem = document.querySelector("ul li:nth-child(3)");
thirdItem.style.backgroundColor = "pink";

// 6. The fifth item should have a yellow background
let fifthItem = document.querySelector("ul li:nth-child(5)");
fifthItem.style.backgroundColor = "yellow";

// 7. The seventh item should have a lightGray background with royalBlue text
let seventhItem = document.querySelector("ul li:nth-child(7)");
seventhItem.style.backgroundColor = "lightGray";
seventhItem.style.color = "royalBlue";

// 8. Add an 8th item with the text of your name
let newItem8 = document.createElement("li");
newItem8.textContent = "Stan Horvath";
ul.appendChild(newItem8);

// 9. Delete the fourth item
let fourthItem = document.querySelector("ul li:nth-child(4)");
fourthItem.remove();

// 10. Add an italic element around the button text and make the background rebeccapurple with white text and a white border
let button = document.getElementById("btn");
button.innerHTML = "<i>Click Me</i>";
button.style.backgroundColor = "rebeccapurple";
button.style.color = "white";
button.style.border = "2px solid white";