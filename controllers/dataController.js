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

const user1 = JSON.parse(localStorage.getItem('user'))

function selectV(vehicleName){
    const select = document.getElementById('selectV')
    // create option using DOM
   
const newOption = document.createElement('option');
select.appendChild(newOption)
const optionText = document.createTextNode(vehicleName);

newOption.appendChild(optionText);

newOption.setAttribute('option','Option Value');
    // const options = document.createElement('option')
    // select.appendChild(options)
    // select.value = vehicleName
    // options.innerHTML = vehicleName
}
fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/records',)
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach(element => {
            selectV(element.vehicleName)
        });
    })



function selectR(rate){
        const select = document.getElementById('rate')
        // create option using DOM
       
    const newOption = document.createElement('option');
    select.appendChild(newOption)
    const optionText = document.createTextNode(rate);
    
    newOption.appendChild(optionText);
    
    newOption.setAttribute('option','Option Value');
        // const options = document.createElement('option')
        // select.appendChild(options)
        // select.value = vehicleName
        // options.innerHTML = vehicleName
    }
    fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/rates',)
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach(element => {
            selectV(element.rate)
        });
    })

  function addVehicle() {
    let vehicleName = document.getElementById('vehicleName')
    let vehicleNumber = document.getElementById('vehicleNumber')
    let vehicleType = document.getElementById('vehicleType')
    let vehicleColor = document.getElementById('vehicleColor')
    
    let data = {
        vehicleName : vehicleName.value,
        category: vehicleType.value,
        vehicleNumber: vehicleNumber.value,
        color: vehicleColor.value
    }

    if (vehicleName.value !="") {
        
        fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/records`, {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept':'*',
            'Content-Type': 'application/json',
            'token': `Bearer ${user1.accessToken}`,
        },
        body: JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((data)=>{
        console.log(data);
        window.alert('data saved successfully')
        window.location.href="../dashboard.html"
    
    })
    .catch((error)=>{
        window.alert(error)
    })
    } else {
        alert('Please fill out all fileds!')
    }
    
   

    }

//=========EMPLOYEES==========//
function users(id, username, email, startDate, userId){
    const tableBody = document.getElementById('tbody')
    const tableRow = document.createElement('tr')

    tableBody.appendChild(tableRow)

    const tdId = document.createElement('td')
    const tdUsername = document.createElement('td')
    const tdEmail = document.createElement('td')
    const tdStartDate = document.createElement('td')
    const td4 = document.createElement('td')

    const tdDiv = document.createElement('div')
    const editIcon = document.createElement('i')
    const delteIcon = document.createElement('i')
    const deleteIconLink = document.createElement('a')
    const editIconLink = document.createElement('a')
    editIcon.classList.add("bi","bi-pencil", "p-2")
    delteIcon.classList.add("bi","bi-trash")

    deleteIconLink.appendChild(delteIcon)
    editIconLink.appendChild(editIcon)

    tdDiv.append(editIconLink,deleteIconLink)    
    td4.appendChild(tdDiv)

    tdId.innerHTML =id
    tdUsername.innerHTML = username
    tdEmail.innerHTML = email
    tdStartDate.innerHTML = startDate

    tableRow.append(tdId, tdUsername, tdEmail,tdStartDate, td4)

    editIconLink.href = `../users-profile.html?id=${userId}`



}
fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/users')
.then((response) => response.json())
.then((data) =>{
    console.log(data);
    for (let index = 0; index < data.length; index++) {
       users(
        index,
        data[index].username,
        data[index].email,
        data[index].createdAt.split('T')[0],
        userId = data[index]._id
       )
        
    }
})
.catch((error) => console.log(error))



//ADD employees functions
let addEmployeeBtn = document.getElementById('addEmployeeBtn')

 addEmployeeBtn.onclick = function (e){
    e.preventDefault()
    let name = document.getElementById('employeeName')
    let number = document.getElementById('employeeNumber')
    let email = document.getElementById('employeeEmail')
    let password = document.getElementById('employeePassword')
    let confirmPassword = document.getElementById('confirmPassword')
    let isAdmin = document.getElementById('isAdminChecked').checked

    if (name.value != '' && number.value !='' && email.value !='' ) {
        if(password.value === confirmPassword.value){
            const results =  fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/auth/register',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username:name.value,
                    email:email.value,
                    number:number.value,
                    password:password.value,
                    isAdmin:isAdmin
                })
                
            }).then((res)=>res.json())
            alert('Sales Person Successfully added')
            window.location.href = '../dashboard.html'
        } else{
            window.alert('Passwords do not match!')

        }
    } else{
        alert('All fields are required')
    }
}






/*========END OF EMPLOYEES FUNCTIONS=========*/

let btn = document.querySelector('.addTrip')
btn.onclick = (e) =>{
    e.preventDefault()
    let vehicleName = document.getElementById('selectV').value.trim()
    let fuel = document.getElementById('fuel').value.trim()
    let weight = document.getElementById('weight').value.trim()
    let rate = document.getElementById('rate').value.trim()
    let other = document.getElementById('other').value.trim()
    let dailySales = document.getElementById('dailySales').value.trim()
    let road = document.getElementById('road').value.trim()
    let totalExpenses = fuel + weight + other + road + rate

    let sales = totalExpenses - dailySales
    let body = {
        vehicleNumber: vehicleName,
        expenses:{
        ratePerTongue: rate.value,
        other: other.value ,  
        raodExpenses: road,
        fuel: fuel.value,
        axelWeight: weight.value,
        },
        dailySales:dailySales,
        totalExpenses: totalExpenses,
        sales: sales
    }
    fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/trips`, {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept':'*',
            'Content-Type': 'application/json',
            'token': `Bearer ${user1.accessToken}`,
        },
        body: JSON.stringify(body)
        })
        .then((res)=>res.json())
        .then((data)=>{
        console.log(data);
        window.alert('data saved successfully')
        window.location.href="../dashboard.html"
    
    })
    .catch((error)=>{
        window.alert(error)
    })
    }


//     vehicleNumber: {type: String, required: true},
    
//     category:{
//         type: String,
//         required: true
//     },
//     expenses:{
//         ratePerTongue:{
//            type: Number,
//            default: 0
//         },
//         fuel:{
//             type: Number,
//             default: 0
//         },
//         axelWeight:{
//             type: Number,
//             default: 0
//         },
//         roadExpenses:{
//             type: Number,
//             default:0
//         },
//         other:{
//             type:Number,
//             default: 0
//         }
        
//     },
//     totalExpenses:{ 
//         type: Number,
//         default: 0
//     },
//     dailySales: {
//         type: Number,
//         required: true
//     },
// sales:{
//     type: Number,
   
// }