const readline = require('readline')
const Read = readline.createInterface(process.stdin,process.stdout);
class calculator{
    constructor(add,sub,mul,div,pow,sqRoot, cRoot, exp, expm1, log, log10, log2x, ceil,floor, round){
    this.add=add
    this.sub=sub
    this.mul=mul
    this.div=div
    this.pow=pow
    this.exp=exp
    this.log=log
    this.ceil=ceil
    this.round=round
    this.floor=floor
    this.sqRoot =sqRoot
    this.cRoot = cRoot
    this.expm1 = expm1
    this.log10 = log10
    this.log2x = log2x
    }
    operations(){
      Read.question("Please Enter Your Option: \nPress 1 Addition:\nPress 2 Substraction:\nPress 3 Multiplication:\nPress 4 Division:\nPress 5 Square Root:\nPress 6 Cube Root:\nPress 7 Exponent:\nPress 8 EXPM1:\nPress 9 LOG:\nPress 10 LOGx10:\nPress 11 LOG base2:\nPress 12 for Ceil:\nPress 13 for Floor:\nPress 14 for Round:\n:Press 15 for Power:\n",
      function(select){
        select=parseInt(select);
        console.log(typeof select)
          switch (select) {
              case 1: display.Add()
              break;
              case 2: display.Sub()
              break;
              case 3: display.Mul()
              break;
              case 4: display.Div()
              break;
              case 5: display.SqRoot()
              break;
              case 6: display.CRoot()
              break;
              case 7: display.Exp()   
              break;
              case 8: display.EpM1()  
              break;
              case 9: display.Lg()
              break;
              case 10: display.Lg10()
              break;
              case 11: display.Lg2()
              break;
              case 12: display.Ceil()
              break;
              case 13: display.Floor()
              break;
              case 14: display.Round()
              break;
              case 15: display.POW()
              break;
              default: "You Enter Wrong Value"
            }
      })
      }
   }
 
    class calc extends calculator{
        constructor(){
            super()
        }
            Add(){
            Read.question('Enter Value 1: \t', (val1) => {
            Read.question('Enter Value 2: \t', (val2) => {
            this.add= parseInt(val1)+parseInt(val2)
            console.log('Result is : \t'+ this.add)
            display.proceedFurther()
            })
            })
           }
          
            Sub(){
            Read.question('Enter Value 1: \t', (val1) => {
            Read.question('Enter Value 2: \t', (val2) => {  
            this.sub= parseInt(val1)-parseInt(val2)
            console.log('Result is : \t'+ this.sub)
            display.proceedFurther()
            })
            })
           }
           
            Mul(){
            Read.question('Enter Value 1: \t', (val1) => {
            Read.question('Enter Value 2: \t', (val2) => {
            this.Mul = parseInt(val1)*parseInt(val2)
            console.log('Result is : \t'+ this.Mul)
            display.proceedFurther()
            })
            })
           }
          
            Div(){
            Read.question('Enter Value 1: \t', (val1) => {
            Read.question('Enter Value 2: \t', (val2) => {
            this.div = parseInt(val1)/parseInt(val2)
            console.log('Result is : \t'+ this.div)
            display.proceedFurther()
            })
            })
           }
          
            POW(){
            Read.question('Enter Value 1: \t', (val1) => {
            Read.question('Enter Power: \t', (val2) => {
            this.pow= Math.pow(val1,val2)
            console.log('Result is : \t'+ this.pow)
            display.proceedFurther()
            })
            })
           }
          
            SqRoot(){
            Read.question('Enter Value : \t', (val1) => {
            this.sqRoot= Math.sqrt(val1)
            console.log('Result is : \t'+ this.sqRoot)
            display.proceedFurther()
            })
           }
           
            CRoot(){
            Read.question('Enter Value : \t', (val1) => {
            this.cRoot= Math.cbrt(val1)
            console.log('Result is : \t'+ this.cRoot)
            display.proceedFurther()
            })
           }
           
            Exp(){
            Read.question('Enter Value : \t', (val1) => {
            this.exp= Math.exp(val1)
            console.log('Result is : \t'+ this.exp)
            display.proceedFurther()
            })
           }
           
            EpM1(){ //function returns e^x - 1
            Read.question('Enter Value : \t', (val1) => {
            this.expm1= Math.expm1(val1)
              console.log('Result is : \t'+ this.expm1)
              display.proceedFurther()
              })
             }
             
              Lg(){
              Read.question('Enter Value : \t', (val1) => {
              this.log= Math.log(val1)
              console.log('Result is : \t'+ this.log)
              display.proceedFurther()
              })
             }
             
              Lg10(){
              Read.question('Enter Value : \t', (val1) => {
              this.log10= Math.log10(val1)
              console.log('Result is : \t'+ this.log10)
              display.proceedFurther()
              })
             }
          
              Lg2(){
              Read.question('Enter Value : \t', (val1) => {
              this.log2x= Math.log2(val1)
              console.log('Result is : \t'+ this.log2x)
              display.proceedFurther()
              })
             }
          
            Ceil(){
              Read.question('Enter Value : \t', (val1) => {
              this.ceil= Math.ceil(val1)
              console.log('Result is : \t'+ this.ceil)
              display.proceedFurther()
              })
             }
          
              Floor(){
              Read.question('Enter Value : \t', (val1) => {
              this.floor= Math.floor(val1)
              console.log('Result is : \t'+ this.floor)
              display.proceedFurther()
              })
             }
              Round(){
              Read.question('Enter Value : \t', (val1) => {
              this.round= Math.round(val1)
              console.log('Result is : \t'+ this.round)
              display.proceedFurther()
              })
             }
          
              proceedFurther(){
              Read.question("If You want to perform further operations : \n press y for Yes \npress n for No \n:",
               function(furtherSelect){
               if(furtherSelect.toLowerCase()=='y'){
                display.operations()
               } else if(furtherSelect.toLowerCase()=='n'){
               console.log("Thank You.! Good Bye")
               Read.close()
               }else{
               console.log("Thank You.! Good Bye")
               Read.close()
               }
               })
             }
    }
   var display=new calc()
   display.operations()