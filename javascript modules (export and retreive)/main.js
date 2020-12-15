const read=require("./assignee")
const read1=require("./task")
const read2=require("./project")

var ahsan = new read.Assignee("Ahsan","Software Developer","Active");
var ali=new read.Assignee("Ali","Assistant Manager","Active")
var farhan=new read.Assignee("Farhan","Project Manager","Active")
var shehzil=new read.Assignee("Ahsan","Manager","Active")

var task1 = new read1.tasks('assignment1','5',ahsan,'notstarted')
var task2 = new read1.tasks('assignment2','5',ahsan,'completed')
var task3 = new read1.tasks('assignment3','6',shehzil,'inprogress')
var task4 = new read1.tasks('assignment4','9',farhan,'completed')
var task5 = new read1.tasks('assignment5','8',ali,'completed')
var task6 = new read1.tasks('assignment6','7',farhan,'notstarted')

var tasklist = new Map();
tasklist.set('1',task1);
tasklist.set('2',task2);
tasklist.set('3',task3);
tasklist.set('4',task4);
tasklist.set('5',task5);
tasklist.set('6',task6);

var pro = new read2.project("a","c",tasklist,tasklist,"e",'f')
pro.TotalTasks()
pro.DaysRemaining('1')
pro.Status('1')
pro.CompletedTasks();
pro.PendingTasks();
pro.TaskAssigneee('1');
pro.DeleteTask('1');
pro.AddTask();
pro.ChangeAssignee("2","Ali");

ali.ChangeStatus="Non Active";
console.log("changed Satus : ",ali);

task2.ChangeTaskStatus="incomeplete";
console.log("changeTaskStatus : ",task2);
