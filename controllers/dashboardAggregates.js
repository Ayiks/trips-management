let totalExpense = 0
let totalRevenue =0
let revenueToday = 0
const expenses = document.getElementById('expenses')
const revenue = document.getElementById('revenue')
const revenueT = document.getElementById('revenueT')
const user = JSON.parse(localStorage.getItem("user"));
fetch('https://kayhans-backend-app.herokuapp.com/vehicleRecords/trips',{
    mode: 'cors',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Accept':'*',
        'Content-Type':'application/json',
        'token': `Bearer ${user.accessToken}`, 
    },
})
.then((response)=>response.json())
.then((data)=>{
    
       for (let index = 0; index < data.length; index++) {
        console.log(data[index].totalExpenses)        
            totalExpense += data[index].totalExpenses 
            revenueToday += data[index].sales 
            totalRevenue += data[index].dailySales   
       }   
       expenses.innerHTML = totalExpense    
       revenue.innerHTML = totalRevenue
       revenueT.innerHTML = revenueToday
    })
