function vehicles({id, vehicleName, vehicleNumber, vehicleColor, vehicleId}){
    const tableBody = document.getElementById('tbody')
    const tableRow = document.createElement('tr')

    tableBody.appendChild(tableRow)

    const tdId = document.createElement('td')
    const tdVehicleName = document.createElement('td')
    const tdVehicleNumber = document.createElement('td')
    const tdColor = document.createElement('td')
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
    tdVehicleName.innerHTML = vehicleName
    tdVehicleNumber.innerHTML = vehicleNumber
    tdColor.innerHTML = vehicleColor

    tableRow.append(tdId, tdVehicleName, tdVehicleNumber,tdColor, td4)

    editIconLink.href = `./users-profile.html?id=${vehicleId}`

    deleteIconLink.onclick = function() {
        let text = "Are you sure you want to delete?!\n OK or Cancel.";
        
        if (confirm(text) == true) {
            console.log(vehicleId );
          try {
           let deleted = fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/records/${vehicleId}`, {
              method: "DELETE",
              headers: {
                'Content-Type': 'application/json'
              },
            }).then(window.alert("Vehicle deleted!"))
            window.location.reload();

          } catch (error) {
            window.alert('Failed to Delete: '+ error)
          }
         
        } else {
        }
      };



}
fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/records')
.then((response) => response.json())
.then((data) =>{
    console.log(data);
    for (let index = 0; index < data.length; index++) {
       vehicles(
    {   
       id:index ,
       vehicleName: data[index].vehicleName,
       vehicleNumber:data[index].vehicleNumber,
       vehicleColor: data[index].color,
        vehicleId : data[index]._id}
       )
        
    }
})
.catch((error) => console.log(error))




let addVehicleBtn = document.getElementById('addVehicleBtn')
    
addVehicleBtn.onclick = function (e) {
    e.preventDefault()
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
        window.location.href="./dashboard.html"
    
    })
    .catch((error)=>{
        window.alert(error)
    })
    } else {
        alert('Please fill out all fileds!')
    }
    
   

    }