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
    TotalTasks(){
        console.log(`Total task is ${this.Tasks.size}`)
    }
    Status(){
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
exports.project=project;