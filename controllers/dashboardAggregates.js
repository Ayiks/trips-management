console.log("123456789");
const user = JSON.parse(localStorage.getItem("user"));
let table = document.getElementById("tbody");
function tableF({
  createdAt,
  vehicleName,
  expenses,
  totalExpense,
  sales,
  dailySales,
}) {
  const tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  const tdata1 = document.createElement("td");
  tableRow.appendChild(tdata1);
  tdata1.innerHTML = createdAt;

  const tdata2 = document.createElement("td");
  tableRow.appendChild(tdata2);
  tdata2.innerHTML = vehicleName;

  const tdata3 = document.createElement("td");
  tableRow.appendChild(tdata3);
  tdata3.innerHTML = expenses;

  const tdata4 = document.createElement("td");
  tableRow.appendChild(tdata4);
  tdata4.innerHTML = totalExpense;

  const tdata5 = document.createElement("td");
  tableRow.appendChild(tdata5);
  tdata5.innerHTML = sales;

  const tdata6 = document.createElement("td");
  tableRow.appendChild(tdata6);
  tdata6.innerHTML = dailySales;
  console.log(dailySales);
}
fetch("https://kayhans-backend-app.herokuapp.com/vehicleRecords/trips", {
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "*",
    "Content-Type": "application/json",
    token: `Bearer ${user.accessToken}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.map((index) => {
        let date = new Date()
        let todaysDate = date.toISOString().split("T")[0]
        let tripDate = index.createdAt.split("T")[0]
      if (tripDate === todaysDate) {
        tableF({
            createdAt: index.createdAt.split("T")[0],
            vehicleName: index.vehicleName,
            expenses: `<span class="p-1 rounded-pill"> Rate : ${
              index.expenses.ratePerTonnage
            } </span>, <span class="p-1 rounded-pill">Fuel :${
              index.expenses.fuel
            }</span>, <span class="p-1 rounded-pill">Axel weight : ${
              index.expenses.axelWeight
            }</span>, <span class="p-1 rounded-pill">Road Expenses : ${
              index.expenses.roadExpenses
            }</span>, <span class="p-1 rounded-pill"> Others: ${
              index.expenses.other ? index.expenses.other : 0
            }</span>`,
            totalExpense: index.totalExpenses,
            sales: index.sales,
            dailySales: index.dailySales,
          });
      } else {
        `<h1>No sales recorded yet</h1>`
      }
    });
  });

let totalExpense = 0;
let totalRevenue = 0;
let revenueToday = 0;
const expenses = document.getElementById("expenses");
const revenue = document.getElementById("revenue");
const revenueT = document.getElementById("revenueT");

fetch("https://kayhans-backend-app.herokuapp.com/vehicleRecords/trips", {
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "*",
    "Content-Type": "application/json",
    token: `Bearer ${user.accessToken}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.map((index) => {
        let date = new Date()
        let todaysDate = date.toISOString().split("T")[0]
        let tripDate = index.createdAt.split("T")[0]
      if (tripDate === todaysDate) {
        totalExpense += index.totalExpenses;
        revenueToday += index.sales;
        totalRevenue += index.dailySales;
    }
    });

    expenses.innerHTML = totalExpense;
    revenue.innerHTML = totalRevenue;
    revenueT.innerHTML = revenueToday;
  })
  .catch((err) => {
    console.log(err);
  });

const user1 = JSON.parse(localStorage.getItem("user"));
console.log(`user name is ${user1.username}`);
let username = document.getElementById("userName");
username.innerHTML = user1.username;
