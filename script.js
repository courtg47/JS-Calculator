$(document).ready(function(){
  var inputNum = [""]; //store values input by calculator
  var totalInput;
  var operators = ["+","-","/","*"];
  var validateDot = ["."];
  var nums = [0,1,2,3,4,5,6,7,8,9];
  
  function getNum(input) {
    
    //To ensure no duplicate dots appear on screen
    if (validateDot.includes(inputNum[inputNum.length - 1]) === true && input === ".") {
      console.log("Att! Duplicate'.'");
      
      //To ensure that we don't start with an operator
    } else if (inputNum.length === 1 && operators.includes(input) === false) {
      inputNum.push(input);
      
      //No duplicate operators in a row
    } else if (operators.includes(inputNum[inputNum.length - 1]) === false) {
      inputNum.push(input);
      
      //If the input is a number, store it in inputNum
    } else if (nums.includes(Number(input))) {
      inputNum.push(input);
    }
    updateScreen();
  }
  
  //Update screen with numbers and operators
  function updateScreen() {
    totalInput = inputNum.join("");
    $("#num").html(totalInput);
  }
  
  //Evaluate total and display on screen
  function total() {
    totalInput = inputNum.join("");
    $("#num").html(eval(totalInput));
  }
  
  //Pressing buttons
  $("a").click(function() {
    
    //When pressing AC/delete button, clear all values
    if(this.id === "delete") {
      inputNum = [""];
      updateScreen();
      
      //When pressing CE button, go back one
    } else if (this.id === "goBack") {
      inputNum.pop();
      updateScreen();
      
      //When pressing equals button, total the values
    } else if (this.id === "=") {
      total();
      
      //When pressing any number buttons, get the value
    } else {
      if (inputNum[inputNum.length - 1].indexOf("-","+","/","*",".") === -1) {
        getNum(this.id);
      } else {
        getNum(this.id);
      }

    }
  });

});