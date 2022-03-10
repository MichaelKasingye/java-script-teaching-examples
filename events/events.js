const entireHeading =  document.querySelector(".heading_top");
const childHeading =  document.querySelector(".heading_top article");

// functions assisting events
function changeHeading() {
    console.log("Events");
    entireHeading.innerHTML = "Heading Changed by function click";
}
function changeChildHeading() {
    childHeading.innerHTML = "Child Heading Changed by function click";
}

// functions Event listener
const buttonOne =  document.querySelector(".button-one");
const buttonTwo =  document.querySelector(".button-two");

buttonOne.addEventListener("click",changeHeading)
buttonTwo.addEventListener("click",changeChildHeading)
