const readline = require('readline');
var r1=readline.createInterface(process.stdin,process.stdout);
var currentIndex;
function userData(){
   var userInfo=[{"accountTitle":"ahsan","accountNo":"12345","pin":"4477","amount":"30000"},{"accountTitle":"ali","accountNo":"56789","pin":"5577","amount":"20000"}];
    loginAtm(userInfo);
    // return {userInfo};       
}
userData()

function loginAtm(userInfo){
    var status=false;
    console.log("\nWelcome ABC Bank \n");
r1.question('Enter you account Number : ',function(input_account){
    r1.question('Enter you Pin : ',function(input_pin){
        for(i=0;i<userInfo.length;i++){
            if(userInfo[i].accountNo==input_account && userInfo[i].pin==input_pin){
                console.log('you are successfully login \n');
                status=true;
                condition(userInfo[i].amount);
                currentIndex=i;
            break;    
            }            
        }
    loginStatus(status);  
})
    })   
}

function loginStatus(st){
    if(st==false){
        console.log("invalid account or pin")
userData();
    }
}

function condition(amount){
    r1.question('would you like to withdraw, deposit or balance inquiry \nfor Withdraw press w \nfor deposit press d \nfor Balance inquiry press b \n ',function(condition1){
        
if(condition1.toLowerCase()=="w"){
    withdraw(amount);
}else if(condition1.toLowerCase()=="d"){
    deposit(amount)
}else if(condition1.toLowerCase()=="b"){
    updateamount(amount);
}else{
    console.log("invalid");
    condition(amount);
} 
})   
}

function withdraw(amount){
r1.question('\nEnter amount you want to withdraw : ',function(withdrawAmount){
     amount=parseInt(amount);
     withdrawAmount=parseInt(withdrawAmount);

    if(withdrawAmount<=amount){
        console.log("\nsuccessfully withdraw : "+ withdrawAmount)
        amount=amount-withdrawAmount;
        // console.log("your remaining balcnce is : "+ amount);
        updateamount(amount);
        
    }
    else{
        console.log("\nyour account has less amount than you want to withdraw");
        withdraw(amount);      
    }
})
}

function deposit(amount){
r1.question('\nEnter amount you want to Deposit : ',function(depositAmount){
    
    amount=parseInt(amount)+parseInt(depositAmount);
    
    console.log("\nsuccessfully Depposit : "+ depositAmount)
    updateamount(amount);
    r1.close();
})   
}
function updateamount(upAmount){
    console.log("\nNow, your account balance is : "+upAmount);
    console.log("THANK YOU");
    var time=new Date().toLocaleString();
    console.log(time);
    process.exit();
}
