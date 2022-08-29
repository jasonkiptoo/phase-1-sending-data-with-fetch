// Add your code here
function submitData(userName,userEmail){

    let usersData={
        name: userName,
        email: userEmail
    };

   const createObj={
    method:"POST",
        headers:{

            "Content-type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(usersData),
    };

   

   return fetch("http://localhost:3000/users", createObj)

    .then(function (response){
        return response.json()
    })

    .then(usersData => {
        let id = usersData["id"]
           let body = document.querySelector("body")
        body.innerHTML = id;
    })
    .catch(function(error){
        alert("No Access");
        
        document.body.innerHTML=error.message
    });

 }
 submitData("new", "newom")

