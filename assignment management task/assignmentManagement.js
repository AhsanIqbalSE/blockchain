class project{
    constructor(Name,Type,Days,Tasks,DaysCompleted,status){
        this.Name=Name;
        this.Type=Type;
        this.Days=Days;
        this.Tasks=Tasks;
        this.DaysCompleted=DaysCompleted;
        this.status=status;
    }
    DaysRemaining(Day){
       console.log(`Remaing days for ${this.Days.get(Day).tname} is ${this.Tasks.get(Day).tdays}`) 
    }
    TotalTasks(taskid){
        console.log(`Total task is ${this.Tasks.size}`)
    }
    Status(st){
        var counter=0;
        for(let i=1;i<=this.Tasks.size;i++){
            if(this.Tasks.get(i.toString()).taskStatus =='completed'){
                counter++;
            }
        }
        let perc=(counter/this.Tasks.size)*100;
        console.log(`Project status is :  ${perc}% Done`)  
    }
    CompletedTasks(){
        var counter=0;
        for(let i=1;i<=this.Tasks.size;i++){
            if(this.Tasks.get(i.toString()).taskStatus =='completed'){
                counter++;
            }
        }
        console.log(`\ntatal completed tasks is ${counter} out of ${this.Tasks.size}` )
    }
    PendingTasks(){
        var counter=0;
        for(let i=1;i<=this.Tasks.size;i++){
            if(this.Tasks.get(i.toString()).taskStatus !='completed'){
                counter++;
            }
        }
        console.log(`tatal pending task is ${counter} out of ${this.Tasks.size}` )
    }
    TaskAssigneee(TaskId){
         return console.log(`\nAssignee of Task ${TaskId} is ${this.Tasks.get(TaskId).assignee.name}(${this.Days.get(TaskId).assignee.title})`)
    }
    DeleteTask(TaskId){
        var state=this.Tasks.delete(TaskId);
        if(state==true){
            console.log(`The Task ${TaskId} has been deleted, Now the remaining task is ${this.Tasks.size}`);
        }
    }
    AddTask(){
        var size=this.Tasks.size;
        var taskId=size + 2;
        taskId=taskId.toString();
        var newassign = {
            tname: 'assignment'+taskId,
            tdays: '4',
             assignee:{ name: 'Farhan',
              title: 'Project Manager'},
            taskStatus: 'notstarted'
        };
    this.Tasks.set(taskId,newassign);
    console.log(`Task is ${this.Tasks.get(taskId).tname}  added at id # ${taskId},Now the total task is ${this.Tasks.size}`);
}
    ChangeAssignee(TaskId,Assignee){
        console.log(`\nBefore Changed the task ${TaskId} Assignee is ${this.Tasks.get(TaskId).assignee.name}`)
        this.Tasks.get(TaskId).assignee.name=Assignee;
        console.log(`Changed the Assignee of task ${TaskId} is ${this.Tasks.get(TaskId).assignee.name}`)

    }
}
class tasks{
	constructor(name,days,assignee,taskStatus){
		this.tname = name
        this.tdays = days
        this.assignee=assignee;
        this.taskStatus=taskStatus;
    }
    ChangeTaskStatus(value){
       this.taskStatus=value;
    }
}
class Assignee{
    constructor(name,title,status){
        this.name=name;
        this.title=title;
        this.status=status;
    }
    ChangeStatus(value){
        this.status=value;
    }
}
var ahsan=new Assignee("Ahsan","Software Developer","Active")
var ali=new Assignee("Ali","Assistant Manager","Active")
var farhan=new Assignee("Farhan","Project Manager","Active")
var shehzil=new Assignee("Ahsan","Manager","Active")


var task1 = new tasks('assignment1','5',ahsan,'notstarted')
var task2 = new tasks('assignment2','5',ahsan,'completed')
var task3 = new tasks('assignment3','6',shehzil,'inprogress')
var task4 = new tasks('assignment4','9',farhan,'completed')
var task5 = new tasks('assignment5','8',ali,'completed')
var task6 = new tasks('assignment6','7',farhan,'notstarted')


var tasklist = new Map();
tasklist.set('1',task1);
tasklist.set('2',task2);
tasklist.set('3',task3);
tasklist.set('4',task4);
tasklist.set('5',task5);
tasklist.set('6',task6);

var pro = new project("a","c",tasklist,tasklist,"e",'f')
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
console.log("changeTaskStatus : ",task2)