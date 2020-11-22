var map=new Map()
var dbmsmap=new Map()
var javaMap=new Map()
var englishMap=new Map()
var PhysicsMap=new Map()
var totalMarks=0;
var obtainedMarks=0;
var tObtainMarks=0;
var tTotalMarks=0;

dbmsmap.set("TotalMarks", "100")
dbmsmap.set("MarksObtained", "80")
map.set("DBMS", dbmsmap)

javaMap.set("TotalMarks", "100")
javaMap.set("MarksObtained", "90")
map.set("Java", javaMap)

englishMap.set("TotalMarks", "100")
englishMap.set("MarksObtained", "75")
map.set("English", englishMap)

PhysicsMap.set("TotalMarks", "100")
PhysicsMap.set("MarksObtained", "60")
map.set("Physics", PhysicsMap)
// console.log(map);

console.log("subject \t Total Marks \t Obtain Marks ")

var arr= map.entries();
for (item of arr){
console.log( item[0]+"\t \t \t" + (map.get(item[0]).get("TotalMarks")+"\t \t"+map.get(item[0]).get("MarksObtained")));

tObtainMarks += parseInt(map.get(item[0]).get("MarksObtained"));
tTotalMarks += parseInt(map.get(item[0]).get("TotalMarks"));
}

console.log(`\nPercentage is : ${(tObtainMarks/tTotalMarks)*100}  % \n`);