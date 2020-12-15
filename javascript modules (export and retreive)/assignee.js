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
exports.Assignee=Assignee;