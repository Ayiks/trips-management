window.addEventListener('load', function(){

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id');
   

    let usernameValue =document.getElementById('employeeName')
    let emailValue =document.querySelector('#employeeEmail')
    let isAdmin = document.getElementById('adminPrivilages')
    let editUsername = document.getElementById('fullName')
    let editPhone = document.getElementById('Phone')
    let editEmail = document.getElementById('Email')
    let adminAlert = document.getElementById('adminAlert')
    let adminSuccesAlert = document.getElementById('adminSuccesAlert')
    let alertMessage = document.getElementById('alertMessage')


    adminAlert.style.display="none"
    adminSuccesAlert.style.display = "none"
    let isAdminn;


fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/users/${id}`)
.then(response => response.json())
.then(data =>{
    console.log(data.username);
   
    usernameValue.innerHTML = data.username
    emailValue.innerHTML =data.email
    emailValue.value = data.email
    isAdmin.checked = data.isAdmin
    editUsername.value = data.username
    editEmail.value = data.email
    editPhone.value = data.number
    isAdminn = data.isAdmin
    
    
})
.catch((error)=>window.alert(error))

const editButton = document.querySelector('#editDetailsBtn')
editButton.onclick = function submit(e){
    e.preventDefault()
    // const username = document.getElementById('employeeName').value
    // const email = document.getElementById('Email').value
    // const phone = document.getElementById('Phone').value
    
    
    // var isChecked=document.getElementById("isChecked").checked

    if(editUsername.value != '' && editEmail.value != "" && editPhone.value != ""){
         fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/users/${id}`,{
        method: 'PUT',
        headers: {
           
            'Content-Type': 'application/json',    
        },
        mode: 'cors',
        body: JSON.stringify({
            username:editUsername.value,
            email: editEmail.value,
            number: editPhone.value
            
        })
    })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            window.alert('Profile Updated')
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
 
const editAdminBtn = this.document.getElementById('editAdminBtn')

editAdminBtn.onclick = function (e){
e.preventDefault()
 if (isAdmin.checked == isAdminn) {
    adminAlert.style.display = "flex"
    alertMessage.innerHTML =`No changes made for user`
    window.reload
 }
 else{
    try {
        fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/users/${id}`,{
        method: 'PUT',
        Headers: {
            'Accept':'*',
            'Content-Type': 'application/json',  
            'token': `Bearer ${user1.accessToken}`,  
        },
        
        body: JSON.stringify({
            isAdmin:isAdminn.checked
            
        })
    })
    .then((response)=>response.json)
    .then((data)=>{
        // adminSuccesAlert.style.display ="flex"
        // alertMessage.innerHTML = `Previlages updated for ${data.username}` 
        window.reload
    })
    } catch (error) {
        
    }
}
}
    


})