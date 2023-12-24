function calcul (Operator) {
    var number1=10
    var number2=5
    
      if (Operator==="+"){
       console.log(add(number1,number2))   
      }
    else if(Operator==="-"){
        console.log(subtract(number1,number2))
        
    }
    else if(Operator==="*"){
        console.log(multipay(number1,number2))
        
    }
    else if(Operator==="/"){
        console.log(divide(number1,number2))  
        
    }
    else 
        return 'choose the right operator (+,-,/,*)'
}