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
let dataTable = new DataTable("#myTable");


