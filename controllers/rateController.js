let displayTonnageRate = document.getElementById('displayTonnageRate')
 let displayFuelRate = document.getElementById('displayFuelRate')
 let editFuelRate = document.getElementById('editFuelRate')
 let editTonnageRate = document.getElementById('editTonnageRate')
 let editTonnageBtn = document.getElementById('editTonnageBtn')
 let editFuelBtn = document.getElementById('editFuelBtn')
 let editRateBtn = document.getElementById('editRateBtn')

 var id,fuelId;

 fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/rates`, {
    headers:{ 
        'Content-Type': 'application/json',    
    },
    })
    .then((res)=>res.json())
    .then(data=>{
                //   displayTonnageRate.innerHTML = data.tonnageRate


       data.map((el)=>{
           displayTonnageRate.innerHTML = el.tonnageRate
           displayFuelRate.innerHTML = el.fuelRate
           id = el._id
           
       })   

       editTonnageBtn.onclick = function(e){
        e.preventDefault()
        if (editTonnageRate.value != "") {
            fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/rates/${id}`,{
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Accept':'*',
                    'Content-Type':'application/json',   
                },
                body: JSON.stringify({
                    tonnageRate: editTonnageRate.value
                })
                
            })
            .then((response)=>response.json())
            .then(()=>{
                console.log(id)
                alert(`Rate adjusted`)
                location.reload()
            })
            .catch((error)=>{
                alert(`Something went wrong: ${error}`)
            })
        } else{
            alert('please set a rate before proceeding')
        }
     }

     editFuelBtn .onclick = function(e){
        e.preventDefault()
       // console.log(editFuelRate.value)
       body = {
        fuelRate: Number(editFuelRate.value)
       }
       console.log(body)
       console.log(id);

        if (editFuelRate.value != "") {
            fetch(`https://kayhans-backend-app.herokuapp.com/vehicleRecords/rates/${id}`,{
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Accept':'*',
                    'Content-Type':'application/json',
                    
                },
                body: JSON.stringify(
                    body
                )
                
            })
            .then(()=>{
               
                alert(`Fuel Rate updated`)
                location.reload()
            })
            .catch((error)=>{
                alert(`Something went wrong: ${error}`)
            })
        } else{
            alert('please set a rate before proceeding')
        }
     }


    })
    
    
    
    
 