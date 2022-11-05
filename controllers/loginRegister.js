const btn = document.querySelector(".btn");

btn.onclick = async function submit(e) {
e.preventDefault()
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

    

  await fetch("https://kayhans-backend-app.herokuapp.com/vehicleRecords/auth/login", {
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
       location.href = "../salesAgent/homepage.html";
     } 
      else {
        alert(data.error.toString());
      }
    })
    .catch((error) => {
      console.log(error);
    });

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(`Username: ${user.username}`);
let username = document.getElementById("userName");
username.innerHTML = user.username;
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




let signOut = document.getElementById('signout')


signOut.onclick = function logout() {
  window.localStorage.clear();
  window.location.reload(true);
  window.location.replace('../index.html');

}

