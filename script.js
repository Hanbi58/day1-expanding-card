// const cont = document.querySelector(".container");

// cont.addEventListener("click", function (e) {
//   const target = e.target;

//   const divs = document.querySelectorAll(".panel");

//   for (dv of divs) {
//     if (dv === target) {
//       continue;
//     }
//     dv.classList.remove("active");
//   }

//   target.classList.toggle("active");
// });

//Teacher's version
//The class active does not remove, upon 2nd click on the same panel. Using delegation could be the way to resolve.
// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClass();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClass() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

//Final Version.OMG, callback hell?
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    for (panel of panels) {
      panel === this
        ? this.classList.toggle("active")
        : panel.classList.remove("active");
    }
  });
});
