/*=========RATES========*/

let rateVal = document.querySelector("#ratePerTonnage");
let fuelVal = document.querySelector("#fuelRate");
let ratePerTonnage;
let fuelRatePerLitre;
let fuelRate;

// const user = JSON.parse(localStorage.getItem("user"));

fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/rates`, {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    data.map((el) => {
      // displayTonnageRate.innerHTML = el.tonnageRate
      // displayFuelRate.innerHTML = el.fuelRate
      ratePerTonnage = el.tonnageRate;
      fuelRatePerLitre = el.fuelRate;
      console.log(el.tonnageRate);
    });
    rateVal.value = ratePerTonnage;
    fuelVal.value = fuelRatePerLitre;
  });

function selectV({ vehicleName, vehicleType }) {
  const select = document.getElementById("selectValue");
  // create option using DOM
  const newOption = document.createElement("option");
  select.appendChild(newOption);
  const optionText = document.createTextNode(vehicleName);

  newOption.appendChild(optionText);

  newOption.setAttribute("option", vehicleName, "Value");

}
let hide = document.getElementById("hideAll");

let truckType = document.getElementById("cateValue")
truckType.addEventListener('change', ()=>{
    let hideElement = document.getElementById('hideAll')
    if (truckType.value === "China Truck") {
        hideElement.style.display = 'none'
        rateVal.value = 0
        fuelVal.value = 0
    } else {
        hideElement.style.display = 'block'
        rateVal.value = ratePerTonnage;
        fuelVal.value = fuelRatePerLitre;
    }
})

fetch("https://kayhans-backend-app.herokuapp.com/vehicleRecords/records", {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    for (let index = 0; index < data.length; index++) {
    //   vehicleCat.push(data[index].category);
      selectV({
        vehicleName: data[index].vehicleName,
        vehicleType: data[index].category,
      });
    //   selectCat(data[index].category, data.length);
    }
  });


// function selectR(rate){
//         const select = document.getElementById('rate')
//         // create option using DOM

//     const newOption = document.createElement('option');
//     select.appendChild(newOption)
//     const optionText = document.createTextNode(rate);

//     newOption.appendChild(optionText);

//     newOption.setAttribute('option','Option Value');
//         // const options = document.createElement('option')
//         // select.appendChild(options)
//         // select.value = vehicleName
//         // options.innerHTML = vehicleName
//     }
// fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/rates',)
// .then((response)=>response.json())
// .then((data)=>{
//     data.forEach(element => {
//         selectV(element.rate)
//     });
// })

let btn = document.querySelector(".addTrip");

btn.onclick = function (e) {
  e.preventDefault();
  let vehicleName = document.getElementById("selectValue").value.trim();
  let fuelRate1 = document.getElementById("fuelRate").value.trim();
  let fuelRateLitre = document.getElementById("fuel").value.trim();
  let weight = document.getElementById("weight").value.trim();
  let rate = document.getElementById("ratePerTonnage").value.trim();
  let other = document.getElementById("other").value.trim();
  let dailySales = document.getElementById("dailySales").value.trim();
  let road = document.getElementById("road").value.trim();
  let fuelNumber = Number(fuelRateLitre) * Number(fuelRate1);
  console.log("fuel is" + fuelNumber);
  let totalExpenses =
    Number(fuelNumber) +
    Number(weight) +
    Number(other) +
    Number(road) +
    Number(rate);

  let sales = dailySales - totalExpenses;
  let body = {
    vehicleName: vehicleName,
    expenses: {
      ratePerTonnage: rate.value,
      other: other.value,
      raodExpenses: road,
      fuel: fuelNumber,
      axelWeight: weight.value,
    },
    dailySales: dailySales,
    totalExpenses: totalExpenses,
    sales: sales,
  };
  console.log(body);
  fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/trips`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      token: `Bearer ${user1.accessToken}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.alert("data saved successfully");
      window.location.href = "./tripsViews.html";
    })
    .catch((error) => {
      window.alert(error);
    });
};
