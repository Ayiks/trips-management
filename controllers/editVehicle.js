window.addEventListener('load', function(){

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id');
   
    console.log('id: '+id)
    let vehicleName =document.getElementById('vehicleName')
    let vehicleNumber =document.querySelector('#vehicleNumber')
    let vehicleColor = document.getElementById('vehicleColor')
    let vehicleCategory = document.getElementById('vehicleCategory')

    let vehicleNameEdit =document.getElementById('name')
    let vehicleNumberEdit =document.querySelector('#number')
    let vehicleColorEdit = document.getElementById('color')
    // let vehicleCategoryEdit = document.getElementById('category')

const user = JSON.parse(localStorage.getItem("user"))

fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/records/${id}`,
{
    headers:{
        'token': `Bearer ${user.accessToken}`,
    }
}
)
.then(response => response.json())
.then(data =>{
    console.log('data'+ data)
   
    vehicleName.innerHTML = data.vehicleName
    vehicleNumber.innerHTML =data.vehicleNumber
    vehicleColor.innerHTML =data.color
    vehicleCategory.innerHTML =data.category

    vehicleNameEdit.value = data.vehicleName
    vehicleNumberEdit.value = data.vehicleNumber
    vehicleColorEdit.value = data.color
    // vehicleCategoryEdit.value = data.category
   
    
    
})
.catch((error)=>window.alert(error))

const editButton = document.querySelector('#editDetailsBtn')
editButton.onclick = function submit(e){
    e.preventDefault()
  

    if(vehicleNameEdit.value != '' && vehicleNumberEdit.value != "" && vehicleColorEdit.value != ""){
         fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/records/${id}`,{
        method: 'PUT',
        headers: {
           
            'Content-Type': 'application/json',    
        },
        mode: 'cors',
        body: JSON.stringify({
            vehicleName:vehicleNameEdit.value,
            vehicleNumber: vehicleNumberEdit.value,
            color: vehicleColorEdit.value,
            //// category: vehicleCategoryEdit.value
            
        })
    })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            window.alert('Vehicle Updated')
            window.location.reload()

        })
        .catch((error)=>{
            window.alert(error)
            window.location.reload()
        })
    } else{
        window.alert("Fields are empty")
    }
    }
})