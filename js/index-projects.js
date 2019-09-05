console.log("index-project.js");

let projImg = document.getElementById("project-img");
let first = document.getElementById("first");

// projImg.addEventListener("mouseover", () => {
//   console.log(this);
//   this.setAttribute("style", "width: 500px");
// });

first.addEventListener("mouseover", () => {
  setTimeout(() => {
    first.style.width = "500px";
  }, 1000);
  first.style.transition = "all .2s";
})