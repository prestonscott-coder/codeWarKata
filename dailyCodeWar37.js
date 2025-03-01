// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


function rentalCarCost(d) {
    if (d >= 7){
      return (d*40 -50)
    }
      else if(d >= 3 && d<7){
        return (d*40 - 20)
      }
        else{
          return(d*40)
        }
  }

  // pseudo code:
  // we are given a function rentalCarCost that takes in a number d representing the number of days the car will be rented
  // if d is greater than or equal to 7 we calculate the total cost by subtracting 50 from the total cost of renting the car for d days multiplied by 40
  // if d is greater than or equal to 3 and less than 7 we calculate the total cost by subtracting 20 from the total cost of renting the car for d days multiplied by 40
  // if none of the above conditions are met we calculate the total cost by simply multiplying d by 40

