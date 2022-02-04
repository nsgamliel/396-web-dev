/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = (e) => {
   if (e.target.id === "default") {
      document.querySelector("body").className = "";
   } else {
      document.querySelector("body").className = e.target.id;
   }
}

buttons = ["#default", "#desert", "#ocean", "#high-contrast"]
for (const button of buttons) {
   document.querySelector(button).addEventListener('click', changeTheme);
}