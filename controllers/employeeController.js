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

    editIconLink.href = `./users-profile.html?id=${userId}`



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