

    function popualteUserTable(users){
      var html = ""
      for(var i = 0; i< users.length; i++){
        html+=`
            <tr>
              <td>${users[i].id}</td>
              <td>${users[i].name}</td>
              <td>${users[i].email}</td>
              <td>${users[i].phone}</td>
              <td><button onclick="fetchTodos(${users[i].id})">Load Todos</button></td>
            </tr>`
      }
      document.getElementById('userTableBody').innerHTML = html
    }

    function fetchUser(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(function(res){
            console.log(res, "response")
            return res.json()
        }).then(function(users){
            console.log(users, "users")
            popualteUserTable(users)
        }).catch(err => console.log(err, "error"))
    }

    function popualteTodosTable(todos){
        var html = ""
        for(var i = 0; i< todos.length; i++){
          html+=`
              <tr>
                <td>${todos[i].id}</td>
                <td>${todos[i].title}</td>
                <td>${todos[i].completed}</td>
              </tr>`
        }
        document.getElementById('todosTableBody').innerHTML = html
      }
  
      function fetchTodos(userId){
          alert(userId)
          fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
          .then(function(res){
              console.log(res, "response")
              return res.json()
          }).then(function(todos){
              console.log(todos, "todos")
              popualteTodosTable(todos)
          }).catch(err => console.log(err, "error"))
      }

    window.onload = function(){
      // popualteUserTable()
      document.getElementById('loadUsersButton').addEventListener('click' , function(){
        // popualteUserTable()
        fetchUser()
        // fetchTodos()
      })
    }
  