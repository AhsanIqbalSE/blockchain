var input_val;
function inputValue(){
  var readline=require("readline");
  var r1=readline.createInterface(process.stdin,process.stdout);
  r1.question('Enter number which you want to find Factorial : ',function(input_account){

      input_val=input_account;
      factorial();
      factorial1(input_account);
      console.log(factorial2(input_account)) ;
      factorial3(input_account);
      hello();
      r1.close();
      
  })
}
inputValue() 

//non parameterize function
function factorial(){
  let fact=1;
  for (var i = 1; i <= input_val; i++) {
    fact *= i;
  }
  return console.log(fact);
}

//parameterize function
function factorial1(value){
    let fact=1;
    for (var i = 1; i <= value; i++) {
      fact *= i;
    }
    return console.log(fact);
  }

  //Recusive function
  function factorial2(value) {
    if (value < 0) 
          return -1;
    else if (value == 0) 
        return 1;
    else {
        return (value * factorial2(value - 1));
    }
  }
  
  
//Arrow function
factorial3=(value)=>{
    let fact=1;
    for (var i = 1; i <= value; i++) {
      fact *= i;
    }
    return console.log(fact);
  }

  //Arrow Function Return Value by Default
  var hello = () => console.log("Thank You");