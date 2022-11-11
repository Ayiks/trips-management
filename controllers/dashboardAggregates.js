let totalExpense = 0
let totalRevenue =0
fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/records',{
    headers: {
        'Content-Type':'application/json'
    },
})
.then((response)=>response.json())
.then((data)=>{
    console.log(`data is this: ${data}`)
        data.map((el)=>{
            console.log(el)
            totalExpense = totalExpense + el.totalExpenses
        })
           
            
        
         
         console.log(totalExpense)
    })
