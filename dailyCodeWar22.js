/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

const bmi = (weight, height) => {
    if (weight/ Math.pow(height,2) <= 18.5){
      return "Underweight"
    }else if (weight/ Math.pow(height,2) <= 25){
      return "Normal"
    }else if (weight / Math.pow(height,2) <= 30){
      return "Overweight"
    }else{
      return "Obese"
    }
  }
    
    console.log(bmi(50,1.8))

    //pseudo code: 
    // used an arrow function with an if else statement
    // to make this more semantic I would create a variable to hold the equation of (weight / Math.pow(height,2)) and then just the variable name to call in the if else statement. 
    // explaining the equation: the Math.pow() function allows us to use a power to the defined parameter in the function, we establish the power by doing ,number you want to power it by following the parameter
    // could also use a switch case break method, but I prefer this solution.