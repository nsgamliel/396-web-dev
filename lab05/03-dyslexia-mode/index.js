/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const toggleDyslMode = () => {
  bdy = document.querySelector("body");
  if (bdy.className === "dyslexia-mode") {
    bdy.className = "";
  } else {
    bdy.className = "dyslexia-mode";
  }
}

document.querySelector("#dyslexia-toggle").addEventListener('click', toggleDyslMode);