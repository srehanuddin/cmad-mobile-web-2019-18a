

    function popualteUserTable(users){
      var html = ""
      for(var i = 0; i< users.length; i++){
        html+=`
            <tr>
              <td>${users[i].id}</td>
              <td>${users[i].name}</td>
              <td>${users[i].email}</td>
              <td>${users[i].phone}</td>
            </tr>`
      }
      document.getElementById('userTableBody').innerHTML = html
    }

    function fetchUser(){
        fetch(`./json/user.json`)
        .then(function(res){
            console.log(res, "response")
            return res.json()
        }).then(function(users){
            console.log(users, "users")
            popualteUserTable(users)
        }).catch(err => console.log(err, "error"))
    }

    window.onload = function(){
      // popualteUserTable()
      document.getElementById('loadUsersButton').addEventListener('click' , function(){
        // popualteUserTable()
        fetchUser()
      })
    }
  