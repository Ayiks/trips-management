const btnLogin = document.querySelector(".btn");

btnLogin.onclick =  function submit(e) {
e.preventDefault()
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

    

   fetch("https://kayhans-backend-app.herokuapp.com/vehicleRecords/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
     localStorage.setItem("user", JSON.stringify(data));
        // console.log("user: ", JSON.stringify(data));
       
      if (data.success === true && data.isAdmin === true) {
        location.href = "./dashboard.html";
      } 
      else if (data.success === true && data.isAdmin !== true) {
       location.href = "./salesDashboard.html";
     } 
      else {
        alert(data.error.toString());
      }
    })
    .catch((error) => {
      console.log(error);
    });

   
};




// function getCurrentUser() {
//   var userName = localStorage.getItem('userName');
//  console.log(userName)
// try {
//   return JSON.parse(userName);
// } catch (ex) {
  
//   return null; // or do some other error handling
// }
// }

// var saveUser = getCurrentUser();
// if(saveUser){
// let username = getElementById('userName')
// username.innerHTML = saveUser.userName
// console.log(saveUser.userName)

// }else{
//   console.log('no user saved')
// }

 function logout() {
  console.log('user')
  window.localStorage.clear();
  window.location.reload(true);
  window.location.replace('./index.html');

}

