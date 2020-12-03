class cv{
    constructor(fullName,fname,email,address,cn,des,dur,deg,ins,cgpa){
        this._fullName=fullName;
        this.fname=fname;
        this.email=email;
        this.address=address;
        this.company=cn;
        this.designation=des;
        this.duration=dur;
        this.degree=deg;
        this.institute=ins;
        this.cgpa=cgpa;
    }
    
    set name(value){
        console.log(value)
        this._fullName=value;
    }
    get name(){
        return console.log(`Full Name : ${this._fullName}`);
    }
    set Fname(value){
        this.fname=value;
    }
    get Fname(){
        return console.log(`Father Name : ${this.fname}`);
    }
    set Email(value){
        this.email=value;
    }
    get Email(){
        return console.log(`Email : ${this.email}`);
    }
    set Address(value){
        this.address=value;
    }
    get Address(){
        return console.log(`Address : ${this.address}`);
    }
    //Experience
    set Company(value){
        this.company=value;
    }
    get Company(){
        return console.log(`Company : ${this.company}`);
    }
    set Designation(value){
        this.designation=value;
    }
    get Designation(){
        return console.log(`Designation : ${this.designation}`);
    }
    set Duration(value){
        this.duration=value;
    }
    get Duration(){
        return console.log(`Duration : ${this.duration}`);
    }
    //Education
    set Degree(value){
        this.degree=value;
    }
    get Degree(){
        return console.log(`Degree : ${this.degree}`);
    }
    set Institute(value){
        this.institute=value;
    }
    get Institute(){
        return console.log(`Institute : ${this.institute}`);
    }
    set CGPA(value){
        this.cgpa=value;
    }
    get CGPA(){
        return console.log(`CGPA : ${this.cgpa}`);
    }
}
var obj=new cv("Ahsan Iqbal","Muhammad Iqbal","ahsan@gmail.com","123 North Nazimabad");
console.log("\n------------Personal Information------------");
obj.name;
obj.Fname;
obj.Email;
obj.Address;

console.log("\n------------Experience------------\n");
obj.Company="FlexSource";
obj.Company;
obj.Designation="Software Developer"
obj.Designation;
obj.Duration="1 year"
obj.Duration

console.log("\n------------Education------------\n");
obj.Degree="BS (Software Engineering)";
obj.Degree;
obj.Institute="SSUET"
obj.Institute;
obj.CGPA="3.2"
obj.CGPA;