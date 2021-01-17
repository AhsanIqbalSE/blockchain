var fs = require('fs')
var path = require('path')

function readCSV(csvfilePath){
    var filePath = path.resolve(csvfilePath)
    console.log(filePath)
    fs.exists(filePath,function(check){
        if(check){
            var ext = (path.extname(filePath))
            if(ext == '.csv'){
                fs.readFile(filePath,function(err,content){
                    if(err){
                        console.log(err)
                        console.log('Error')
                    }else{
                        var csv=content.toString();
                        console.log("\nthis is csv data\n");
                        console.log(csv)
                        console.log("\nthis is csv to json");
                        console.log(csvToJson(csv)); 
                    }
                })
            }else{
                console.log("file type incorrect");
            }
        }
    })
}
readCSV('./index.csv')

function csvToJson(csvString){
    var result = [];
    var lines = csvString.split('\n');
    var headings = lines[0].split(',')
    // console.log(headings)
    for(var i = 1; i < lines.length; i++){
        var obj = {};
        var record = lines[i].split(',');
        for(var j = 0; j<record.length;j++){
            obj[headings[j]] = record[j];
        }
        result.push(obj)
    }
 var json= JSON.stringify(result).replace(/\\r/g,'');
return JSON.parse(json)
}