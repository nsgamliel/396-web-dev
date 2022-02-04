const makeBigger = () => {
   selectorStrings = ["div.content", "h1"]
   for (const elem of selectorStrings) {
      txt = document.querySelector(elem);
      style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      currentSize = parseFloat(style);
      txt.style.fontSize = (currentSize + 1) + 'px';
   }
};

const makeSmaller = () => {
   selectorStrings = ["div.content", "h1"]
   for (const elem of selectorStrings) {
      txt = document.querySelector(elem);
      style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      currentSize = parseFloat(style);
      txt.style.fontSize = (currentSize - 1) + 'px';
   }
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
