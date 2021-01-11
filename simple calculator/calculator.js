const readline = require('readline')
const Read = readline.createInterface(process.stdin,process.stdout);

operations();
function operations(){
Read.question("Please Enter Your Option: \nPress 1 Addition:\nPress 2 Substraction:\nPress 3 Multiplication:\nPress 4 Division:\n",
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

   
   proceedFurther=()=>{
    Read.question("If You want to perform further operations : \n y for Yes \n n for No \n:",
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
