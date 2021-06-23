

var prime_check = function() {  
    var num = prime_input.value;
    
    var check = 0; 
        if(num == 0 || num == 1) { check ++ }
  
        else { 
  
        for(var i = 2; i < num; i ++) { 
  
            if(num % i == 0) { 
                check ++; 
            }
  
        }
  
    }  
    if(check == 0) {      
        prime_ans.value = "prime number";
        
    } else { 
        prime_ans.value = "Not a prime"; 
     }
}




function fact(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * fact(n-1);
    }
}




var armstrong = function() {  

    var num = arm_input.value; 

    var temp = num; 
    var sum = 0 ; 
  
    while(num > 0) { 
        digit  = num % 10 ; 
        sum += Math.pow(digit, 3) ; 
        num = Math.floor(num/10); 
    } 
  
    if(sum == temp) { 
        arm_output.value = temp + " " + "is Armstrong number" ; 
    } else { 
        arm_output.value = "not Armstrong number"
    }
  
  
}



var palindrome = function() { 

    var num = palin_input.value; 

    var temp = num; 
    var reverse = 0; 
  
    while(num > 0) { 
        digit = num % 10; 
        reverse = reverse * 10 + digit; 
        num = Math.floor(num/10); 
  
    } 
  
    if(temp == reverse) { 
        palin_output.value = temp +" "+ "is palindrome"; 
    } else { 
        palin_output.value = temp +" "+ "is not palindrome";
    }
}


