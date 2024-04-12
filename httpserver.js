const http = require('http')

const port = process.env.PORT || 2020;
const server = http.createServer((req,res) =>{
    console.log(req.url)
    res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
    res.statusCode = 200;
    res.end('<h1> This is Siddiq 01</h1> <p> mk is stnky and smelly</p>');
}
    else if(req.url == '/about'){
    res.statusCode = 200;
    res.end('<h1> This is about Siddiq 01</h1> <p> mk is still more or less stnky and smelly</p>');
}
else if(req.url == '/hello'){
    res.statusCode = 200;
    res.end('<h1> This is about Siddiq 01</h1> <p> mk is still more or less stnky and smelly</p>');
}
    else{
        res.statusCode = 404;
        res.end('<h1> This is not Siddiq 01</h1> <p> stinkiness overload </p>'); 
    }

})
server.listen(port, ()=>{
    console.log('server is listening at port ${port}');
})