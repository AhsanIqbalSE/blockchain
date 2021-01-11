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
exports.tasks=tasks;