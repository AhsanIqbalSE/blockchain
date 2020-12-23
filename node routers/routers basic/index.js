var http = require('http')

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

http.createServer(function(req,res){
	if(req.url == '/'){
		console.log(req.url)
		var ab=pro.TotalTasks()
		res.write('<h1>Nodejs Project</h1>' + req.url)
		res.end()
	}else if(req.url == '/post'){
		res.write('Welcome To Post'+ req.url)
		res.end()
	}else{
		var data = {'text':'asdasds'}

		res.writeHead(200,{'contentType':'application/json'})
		res.write(data.text)
		res.end()
	}
}).listen(90)