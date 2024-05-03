import { Calculate } from "./Calculate";

var cal = new Calculate();
try 
{    
  console.log(cal.divideNumber(40,8));
} catch (error) {
    console.log(error.message);
}
