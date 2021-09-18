/* global $ */
$(document).ready(function(){
  $(".key-1").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-1").css("border", "2px solid blue");
    pressNumberKey("1");
  });
  
  $(".key-2").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-2").css("border", "2px solid blue");
    pressNumberKey("2");
  });
  
  $(".key-3").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-3").css("border", "2px solid blue");
    pressNumberKey("3");
  });
  
  $(".key-4").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-4").css("border", "2px solid blue");
    pressNumberKey("4");
  });
  
  $(".key-5").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-5").css("border", "2px solid blue");
    pressNumberKey("5");
  });
  
  $(".key-6").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-6").css("border", "2px solid blue");
    pressNumberKey("6");
  });
  
  $(".key-7").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-7").css("border", "2px solid blue");
    pressNumberKey("7");
  });
  
  $(".key-8").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-8").css("border", "2px solid blue");
    pressNumberKey("8");
  });
  
  $(".key-9").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-9").css("border", "2px solid blue");
    pressNumberKey("9");
  });
  
  $(".key-0").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-0").css("border", "2px solid blue");
    pressNumberKey("0");
  });
  
  $(".key-00").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-00").css("border", "2px solid blue");
    pressNumberKey("00");
  });
  
  $(".key-plus-sign").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-plus-sign").css("border", "2px solid blue");
    pressSymbolKey("+");
  });
  
  $(".key-minus-sign").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-minus-sign").css("border", "2px solid blue");
    pressSymbolKey("-");
  });
  
  $(".key-multiplication-sign").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-multiplication-sign").css("border", "2px solid blue");
    pressSymbolKey("*");
  });
  
  $(".key-division-sign").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-division-sign").css("border", "2px solid blue");
    pressSymbolKey("/");
  });
  
  $(".key-decimal-point").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-decimal-point").css("border", "2px solid blue");
    pressDecimalPoint();
  });
  
  $(".key-ac").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-ac").css("border", "2px solid blue");
    pressAC();
  });
  
  $(".key-equal-sign").click(function(){
    $("button").css("border", "2px solid black");
    $(".key-equal-sign").css("border", "2px solid blue");
    pressEqualSign();
  });
});

let result = "0";
let value1 = "0", value2 = null, operator = null;
let value1DecimalPoint = 0, value2DecimalPoint = 0;
let completedCalculation = 0;

function pressNumberKey(input){
  if(operator === null){
    if(result === "0"){
      value1 = input;
      result = value1;
      $(".result").text(result);
    } else {
      value1 = value1 + input;
      result = value1;
      $(".result").text(result);
    }
  } else {
    if(value2 === null){
      value2 = input;
      result = value1 + operator + value2;
      $(".result").text(result);
    } else {
      value2 = value2 + input;
      result = value1 + operator + value2;
      $(".result").text(result);
    }
  }
  
  completedCalculation = 0;
}

function pressSymbolKey(input){
  if(operator === null){
    operator = input;
    result = value1 + operator;
    $(".result").text(result);
  }
  
  completedCalculation = 0;
}

function pressDecimalPoint(){
  if(operator === null && value1DecimalPoint === 0){
    value1 = value1 + ".";
    result = value1;
    
    $(".result").text(result);
    
    value1DecimalPoint++;
    
  } else if(operator !== null && value2 !== null && value2DecimalPoint === 0){
    value2 = value2 + ".";
    result = value1 + operator + value2;
    
    $(".result").text(result);
    
    value2DecimalPoint++;
  }
  
  if(completedCalculation === 1){
    $(".result").text("0");
    
    result = "0";
    value1 = "0", operator = null, value2 = null;
    value1DecimalPoint = 0, value2DecimalPoint = 0;
    
    completedCalculation = 0;
  }
}

function pressAC(){
  $(".result").text("0");
  
  result = "0";
  value1 = "0", operator = null, value2 = null;
  value1DecimalPoint = 0, value2DecimalPoint = 0;
  
  completedCalculation = 0;
}

function pressEqualSign(){
  if(value2 !== null){
    value1 = Number(value1);
    value2 = Number(value2);
    
    switch(operator){
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value1 - value2;
        break;
      case "*":
        result = value1 * value2;
        break;
      case "/":
        result = value1 / value2;
        break;
      default:
        break;
    }
    
    result = String(result);
    
    $(".result").text(result);
    
    value1 = result, operator = null, value2 = null;
    value1DecimalPoint = 0, value2DecimalPoint = 0;
    
    completedCalculation = 1;
  }
}