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

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14).toDateString(),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12).toDateString(),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28).toDateString(),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12).toDateString(),
  },
];
console.log(expenses[0].amount);
