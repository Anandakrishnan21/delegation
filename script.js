const boxes = document.querySelectorAll(".box");
const button = document.querySelector(".button");
const boxGroup = document.querySelector(".boxGroup");

button.addEventListener("click", () => {
  const box = document.createElement("div");
  boxGroup.appendChild(box);
  box.classList.add("box");
});

// boxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
//     box.classList.toggle("color");
//   });
// });

const globalEventListener = (type, selector, callback) =>{
    document.addEventListener(type, (e) => {
        if(e.target.matches(selector)){
            callback(e)
        }
    })
}

globalEventListener("click", ".box", (e) => {
    e.target.classList.toggle("color");
} )

// document.addEventListener("click", (e) => {
//   if (e.target.matches(".box")) {
//     e.target.classList.toggle("color");
//   }
// });
