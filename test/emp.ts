export class Employee
{
    empNo:number = 101;
    empName:string = "Nikhil";
    empSalary:number = 70000;
    empExpertise:string[] = ['.Net','Java','SQL','Azure','Angular','React'];

    printDetails():string
    {
        return this.empNo + " " + this.empName + " " + this.empSalary;
    }

    printExpertise():any
    {
       
        this.empExpertise.forEach(function(val){
            console.log(val);
        })
    }
}