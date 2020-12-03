class Marksheet{
    constructor(sub1,sub2,sub3,sub4,T_marks,Grade,percentage){
        this.sub1=sub1;
        this.sub2=sub2;
        this.sub3=sub3;
        this.sub4=sub4;
        this.T_marks=T_marks;
        this.Grade=Grade;
        this.percentage=percentage;
    }
    set totalMarks(value){
        this.T_marks=value;
    }
    get totalMarks(){
        return this.T_marks
    }
    set Java(value){
        this.sub1=value;
    }
    get Java(){
        return console.log(`Java \t   ${this.T_marks} \t\t     ${this.sub1}`);
    }
    set DBMS(value){
        this.sub2=value;
    }
    get DBMS(){
        return console.log(`DBMS \t   ${this.T_marks} \t\t     ${this.sub2}`);
    }
    set English(value){
        this.sub3=value;
    }
    get English(){
        return console.log(`English    ${this.T_marks} \t\t     ${this.sub3}`);
    }
    set Physics(value){
        this.sub4=value;
    }
    get Physics(){
        return console.log(`Physics    ${this.T_marks} \t\t     ${this.sub4}`);
    }

    Percentage(){
        var GT_marks=400;
        this.percentage=(this.sub1+this.sub2+this.sub3+this.sub4)/GT_marks*100;
        console.log(`\nPercentage ${this.percentage} %\n`)
    }
    grade(){
        if(this.percentage>=80){
            console.log("Grade A1")
        }
        else if(this.percentage<80 && this.percentage>=70){
            console.log("Grade A")
        }
        else if(this.percentage<70 && this.percentage>=60){
            console.log("Grade B")
        }
        else if(this.percentage<60 && this.percentage>=50){
            console.log("Grade C")
        }
        else if(this.percentage<50 && this.percentage>=40){
            console.log("Grade D")
        }
        else{
            console.log("Grade Fail")
        }
    }
}
var marks=new Marksheet();
console.log("Subject\t Total Marks\t Obtain Marks")
marks.totalMarks=100;
marks.totalMarks;
marks.Java=80;
marks.Java
marks.DBMS=77;
marks.DBMS;
marks.English=89;
marks.English;
marks.Physics=85;
marks.Physics;
marks.Percentage()
marks.grade()