// var a = 10;
// var b = 20;
// console.log(a+b);

const httpOne = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

const server = httpOne.createServer((req, res) => {
    console.log("", req.method, req.url, req.pathName, req.protocol, req.host)
    
    if(req.url === '/a'){
        res.write("Its page a")
    }
    else if(req.url === '/b'){
        res.write("Its page b")
    }
    else if(req.url === '/users'){
        var users = [
            {
                name : "Rehan"
            },
            {
                name : "Ali"
            }
        ]
        res.write(JSON.stringify(users))
    }
    // res.write("Hello World!")
    // res.write("Hello World!")
    res.end()

});

server.listen(3000, () => {
  console.log(`Server running`);
});