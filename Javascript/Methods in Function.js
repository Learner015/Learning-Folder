let calc = {
    num1: prompt('Enter a number: '),
    num2: prompt('Enter second number:  '),
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return Math.abs(a-b);
    }, 
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        if (b != 0){
            return a/b;  
        }
        else{
            return "Can't compute."
        }
    }
};
