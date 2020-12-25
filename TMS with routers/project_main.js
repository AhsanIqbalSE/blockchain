var http = require('http')
const {pro,change,changeTstatus}=require("./main")

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

http.createServer(function(req,res){
    var uid;
   switch(req.url){
       case '/task/1':uid="1" 
       break;
       case '/task/2':uid="2" 
       break;
       case '/task/3':uid="3" 
       break;
       case '/task/4':uid="4" 
       break;
       case '/task/5':uid="5" 
       break;
       case '/task/6':uid="6" 
       break;
       case '/assignee/1':uid="1" 
       break;
       case '/assignee/2':uid="2" 
       break;
       case '/assignee/3':uid="3" 
       break;
       case '/assignee/4':uid="4" 
       break;
       case '/assignee/5':uid="5" 
       break;
       case '/assignee/6':uid="6" 
       break;
   }
   console.log(req.url)
	if(req.url == ("/project")){
        res.write("Task Management System\n")
		res.write(pro.TotalTasks())
        res.write("\n")
        res.write(pro.Status())
        res.write("\n")
        res.write(pro.CompletedTasks())
        res.write("\n")
        res.write(pro.PendingTasks())
        res.write("\n")
		res.end()
    }else if(req.url == "/task/"+uid){
        res.write(pro.DaysRemaining(uid))
        res.write("\n")
        res.write(pro.ChangeAssignee(uid,"Ali"))
        res.write("\n")
        res.write(changeTstatus)
        res.end()
    }else if(req.url == "/assignee/"+uid){
        res.write("\n")
        res.write(pro.TaskAssigneee(uid))
        res.write(change)
		res.end()
    }
    else if(req.url == '/addtask'){
        res.write("\n")
        res.write(pro.AddTask())
		res.end()
    }
   else{
		var data = {'text':'Invalid URL'}
		res.writeHead(200,{'contentType':'application/json'})
		res.write(data.text)
		res.end()
	}
}).listen(190)