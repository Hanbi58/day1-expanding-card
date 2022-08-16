const cont = document.querySelector(".container");

cont.addEventListener("click", function (e) {
  const target = e.target;

  const divs = document.querySelectorAll(".panel");

  for (dv of divs) {
    if (dv === target) {
      continue;
    }
    dv.classList.remove("active");
  }

  target.classList.toggle("active");
});
