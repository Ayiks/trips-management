// function getTrips({id,truckName, truckType, expenses,totalExpenses, dailySales,sales }){
//     let tbody = document.getElementById('tableBody')

//     let trow = document.createElement('tr')
//     tbody.appendChild(trow)

//     let tdata1 = document.createElement('td')
//     trow.appendChild(tdata1)
//     tdata1.innerHTML = id

//     let tdata2 = document.createElement('td')
//     trow.appendChild(tdata2)
//     tdata2.innerHTML = truckName

//     let tdata3 = document.createElement('td')
//     trow.appendChild(tdata3)
//     tdata3.innerHTML = truckType

//     let tdata4 = document.createElement('td')
//     trow.appendChild(tdata4)
//     tdata4.innerHTML = expenses

//     let tdata5 = document.createElement('td')
//     trow.appendChild(tdata5)
//     tdata5.innerHTML = totalExpenses

//     let tdata6 = document.createElement('td')
//     trow.appendChild(tdata6)
//     tdata6.innerHTML = dailySales

//     let tdata7 = document.createElement('td')
//     trow.appendChild(tdata7)
//     tdata7.innerHTML = sales
//   }

//   const user = JSON.parse(localStorage.getItem("user"));
//   fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/trips',{
//     headers: {
//         token: `Bearer ${user.accessToken}`,
//       },
//   }).then((data)=>data.json())
//   .then((response)=>{
//     for(i = 0; i<=response.length; i++){
//         console.log(response)
//         getTrips({
//             id:i,
//             truckName: response[i].vehicleNumber,
//             truckType:response[i].category,
//             expenses: `<span class="p-1 rounded-pill"> Rate : ${
//             response[i].expenses.ratePerTongue
//           } </span>, <span class="p-1 rounded-pill">Fuel :${
//             response[i].expenses.fuel
//           }</span>, <span class="p-1 rounded-pill">Axel weight : ${
//             response[i].expenses.axelWeight
//           }</span>, <span class="p-1 rounded-pill">Road Expenses : ${
//             response[i].expenses.roadExpenses
//           }</span>, <span class="p-1 rounded-pill"> Others: ${
//             response[i].expenses.other ? response[i].expenses.other : 0
//           }</span>`,
//           totalExpenses: response[i].totalExpenses,
//           dailySales: response[i].dailySales,
//           sales: response[i].sales
//         } )
//     }
//   })
//let dataTable = new DataTable("#myTable");

const user1 = JSON.parse(localStorage.getItem("user"));



/*=========RATES========*/

let rateVal = document.querySelector("#ratePerTonnage");
let fuelVal = document.querySelector("#fuelRate");
let ratePerTonnage;
let fuelRatePerLitre;
let fuelRate;


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
//   select.addEventListener('change', ()=>{

//       if (vehicleType === "China Truck") {
//           console.log('this is working')
//           hide.style.display = "none"
//           rateVal.value = 0;
//       } else{
//           console.log('fuck off')
//           hide.style.display = "block"
//           // rateVal.value = ratePerTonnage

//       }
//   })
}
let hide = document.getElementById("hideAll");
//hide.style.display = 'none'
// let vehicleCat = [];
// function selectCat(vehicleCategory, length) {
//   const select = document.getElementById("cateValue");
//   // create option using DOM
//   const newOption = document.createElement("option");
//   select.appendChild(newOption);
//   const optionText = document.createTextNode(vehicleCategory);

//   newOption.appendChild(optionText);

//   newOption.setAttribute("option", vehicleCategory, "Value");

//   select.addEventListener("change", () => {
//     for (let i = 0; i < length.length; i++) {
//       console.log(`this is the list ${i}`);
//       if (optionText.contains("China Truck")) {
//         console.log("this is working");
//         hide.style.display = "none";
//         rateVal.value = 0;
//       } else {
//         console.log("fuck off");
//         hide.style.display = "block";
//         // rateVal.value = ratePerTonnage
//       }
//     }
//   });
// }
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
      ratePerTonnage: rate,
      other: other,
      raodExpenses: road,
      fuel: fuelNumber,
      axelWeight: weight,
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
      if ( user1.isAdmin === true) {
        window.location.href = "./tripsViews.html";
      } 
      else if (user1.isAdmin !== true) {
       location.href = "./salesDashboard.html";
     } 
     
    })
    .catch((error) => {
      window.alert(error);
    });
};
