const readline = require('readline')
const Read = readline.createInterface(process.stdin,process.stdout);

operations();
function operations(){
Read.question("Please Enter Your Option: \nPress 1 Addition:\nPress 2 Substraction:\nPress 3 Multiplication:\nPress 4 Division:\nPress 5 Square Root:\nPress 6 Cube Root:\nPress 7 Exponent:\nPress 8 EXPM1:\nPress 9 LOG:\nPress 10 LOGx10(11):\nPress 11 LOG base2:\nPress 12 log 1+x:\nPress 13 for Absolute:\nPress 14 for Ceil:\nPress 15 for Floor:\nPress 16 for Round:\n:Press 17 for Power:\n",
function(select){
  select=parseInt(select);
  console.log(typeof select)
    switch (select) {
        case 1: add()
        break;
        case 2: sub()
        break;
        case 3: mul()
        break;
        case 4: div()
        break;
        case 5: sqRoot()
        break;
        case 6: cRoot()
        break;
        case 7: ep()   
        break;
        case 8: epM1()  
        break;
        case 9: lg()
        break;
        case 10: lg10()
        break;
        case 11: lg2()
        break;
        case 12: lg1p()
        break;
        case 13: Absolute()
        break;
        case 14: Ceil()
        break;
        case 15: Floor()
        break;
        case 16: Round()
        break;
        case 17: POW()
        break;
        default: "You Enter Wrong Value"
      }
})
}

function add(){
  Read.question('Enter Value 1: \t', (val1) => {
  Read.question('Enter Value 2: \t', (val2) => {
  let result= parseInt(val1)+parseInt(val2)
  console.log('Result is : \t'+ result)
  proceedFurther()
  })
  })
 }

 function sub(){
  Read.question('Enter Value 1: \t', (val1) => {
  Read.question('Enter Value 2: \t', (val2) => {
  let result= parseInt(val1)-parseInt(val2)
  console.log('Result is : \t'+ result)
  proceedFurther()
  })
  })
 }
 
 function mul(){
  Read.question('Enter Value 1: \t', (val1) => {
  Read.question('Enter Value 2: \t', (val2) => {
  let result= parseInt(val1)*parseInt(val2)
  console.log('Result is : \t'+ result)
  proceedFurther()
  })
  })
 }

 function div(){
  Read.question('Enter Value 1: \t', (val1) => {
  Read.question('Enter Value 2: \t', (val2) => {
  let result= parseInt(val1)/parseInt(val2)
  console.log('Result is : \t'+ result)
  proceedFurther()
  })
  })
 }

 function POW(){
  Read.question('Enter Value 1: \t', (val1) => {
  Read.question('Enter Power: \t', (val2) => {
  let result= Math.pow(val1,val2)
  console.log('Result is : \t'+ result)
  proceedFurther()
  })
  })
 }

 function sqRoot(){
  Read.question('Enter Value : \t', (val1) => {
  let result= Math.sqrt(val1)
  console.log('Result is : \t'+ result)
  proceedFurther()
  })
 }
 
 function cRoot(){
  Read.question('Enter Value : \t', (val1) => {
  let result= Math.cbrt(val1)
  console.log('Result is : \t'+ result)
  proceedFurther()
  })
 }
 
 function ep(){
  Read.question('Enter Value : \t', (val1) => {
  let result= Math.exp(val1)
  console.log('Result is : \t'+ result)
  proceedFurther()
  })
 }

 function epM1(){ //function returns e^x - 1
  Read.question('Enter Value : \t', (val1) => {
  let result= Math.expm1(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }
   
   function lg(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.log(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }
   
   function lg10(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.log10(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }

   function lg2(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.log2(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }
   
   function lg1p(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.log1p(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }

   function Absolute(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.abs(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }

   function Ceil(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.ceil(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }

   function Floor(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.floor(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }
   function Round(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.round(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }
   function POW(){
    Read.question('Enter Value : \t', (val1) => {
    let result= Math.log2(val1)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
   }

   function POW(){
    Read.question('Enter Base : \t', (val1) => {
    Read.question('Enter Power: \t', (val2) => {
    let result= Math.pow(val1,val2)
    console.log('Result is : \t'+ result)
    proceedFurther()
    })
    })
   }

   proceedFurther=()=>{
    Read.question("If You want to perform further operations : \n press y for Yes \npress n for No \n:",
     function(furtherSelect){
     if(furtherSelect.toLowerCase()=='y'){
      operations()
     } else if(furtherSelect.toLowerCase()=='n'){
     console.log("Thank You.! Good Bye")
     Read.close()
     }else{
     console.log("Thank You.! Good Bye")
     Read.close()
     }
     })
    
   }
