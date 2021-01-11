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
        return `\nRemaing days for ${this.Days.get(Day).tname} is ${this.Tasks.get(Day).tdays}` 
    }
    TotalTasks(){
        return `Total task is ${this.Tasks.size}`
    }
    Status(){
        var counter=0;
        for(let i=1;i<=this.Tasks.size;i++){
            if(this.Tasks.get(i.toString()).taskStatus =='completed'){
                counter++;
            }
        }
        let perc=(counter/this.Tasks.size)*100;
        return `Project status is :  ${perc}% Done`
    }
    CompletedTasks(){
        var counter=0;
        for(let i=1;i<=this.Tasks.size;i++){
            if(this.Tasks.get(i.toString()).taskStatus =='completed'){
                counter++;
            }
        }
        return `tatal completed tasks is ${counter} out of ${this.Tasks.size}`
    }
    PendingTasks(){
        var counter=0;
        for(let i=1;i<=this.Tasks.size;i++){
            if(this.Tasks.get(i.toString()).taskStatus !='completed'){
                counter++;
            }
        }
        return `tatal pending task is ${counter} out of ${this.Tasks.size}` 
    }
    TaskAssigneee(TaskId){
         return `\nAssignee of Task ${TaskId} is ${this.Tasks.get(TaskId).assignee.name}(${this.Days.get(TaskId).assignee.title})`
    }
    DeleteTask(TaskId){
        var state=this.Tasks.delete(TaskId);
        if(state==true){
           return `The Task ${TaskId} has been deleted, Now the remaining task is ${this.Tasks.size}`
        }
    }
    AddTask(){
        var size=this.Tasks.size;
        var taskId=size + 1;
        taskId=taskId.toString();
        var newassign = {
            tname: 'assignment'+taskId,
            tdays: '4',
             assignee:{ name: 'Farhan',
              title: 'Project Manager'},
            taskStatus: 'notstarted'
        };
    this.Tasks.set(taskId,newassign);
    return `Task is ${this.Tasks.get(taskId).tname}  added at id # ${taskId},Now the total task is ${this.Tasks.size}`
}
    ChangeAssignee(TaskId,Assignee){
        
        this.Tasks.get(TaskId).assignee.name=Assignee;
        return `Changed the Assignee of task ${TaskId} is ${this.Tasks.get(TaskId).assignee.name}`
    }
}
exports.project=project;