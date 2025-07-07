const http = require('http')
const path = require('path')
const fs = require('fs')


const PORT = process.env.PORT || 8080

//create server
const server = http.createServer((req, res) => {
    //set root filepath to index.html or the req.url
    let filePath = path.join(__dirname, '/src', req.url == '/' ? 'index.html' : req.url)
    
    //get extension name
    let extName = path.extname(filePath);

    //set contentType
    let contentType = "text/html"
    switch (extName) {
        case ".json":
            contentType = "application/json"            
            break;
            case ".css":
            contentType = "text/css"            
            break
            case ".js":
            contentType = "text/javascript"            
            break
            case ".png":
            contentType = "image/png"            
            break
            case ".jpg":
            contentType = "image/jpg"            
            break
    
        default:
            break;
    }
    fs.readFile(filePath, (err, data) => {
        if(err) {
            if(err.code == "ENOENT") {
                fs.readFile(path.join(__dirname, '/src', '404.html'), (err, data) => {
                    res.writeHead(404, {"content-type" : "text/html"})
                    res.end(data, 'utf-8')
                })
            } else {
                res.writeHead(500)
                res.end(`Server error: ${err.code}`)
            }
        } else {
            res.writeHead(200, {"content-type" : contentType});
            res.end(data, "utf8")
        }
    })
    
})

server.listen(PORT, err => {
    if(err) throw new Error(err);
    console.log("Server running!...")
})