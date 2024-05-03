export class Calculate
{
    addNumbers(num1:number, num2:number)
    {
        if(num1 < 0 || num2 < 0)
        {
            throw new Error("We do not process negative values");
        }
        else if(num1 < num2)
            {
                throw new Error("First Number should be greater than second number");
            }
        return num1 + num2;
    }

    divideNumber(num1:number, num2:number)
    {
        if(num2 == 0)
            {
                throw new Error("Cannot divide any number by 0");
            }
        return num1/num2;
    }


}