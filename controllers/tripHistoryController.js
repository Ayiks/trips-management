fetch("https://kayhans-backend-app.herokuapp.com/vehicleRecords/trips", {
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "*",
    "Content-Type": "application/json",
    token: `Bearer ${user.accessToken}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.map((index) => {
        let date = new Date()
        let todaysDate = date.toISOString().split("T")[0]
        startDate = date.value
        endDate = date.value        
        let tripDate = index.createdAt.split("T")[0]
      if (tripDate <= startDate && tripDate >= endDate) {
        totalExpense += index.totalExpenses;
        revenueToday += index.sales;
        totalRevenue += index.dailySales;
    }
    });
    if (startDate <= tripdate && enddate>= tripdate) {
      //display data
    }

    expenses.innerHTML = totalExpense;
    revenue.innerHTML = totalRevenue;
    revenueT.innerHTML = revenueToday;
  })
  .catch((err) => {
    console.log(err);
  });