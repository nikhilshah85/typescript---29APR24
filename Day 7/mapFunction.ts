class Employees
{
     topEmployees:string[] = ['Rohit','Karan','Khushboo','Mohit','Raman','Akash','Surbhi'];

    topEmployeeDetails:any[] = [
        {empNo:101, empName:'Nikhil',empDesignation:'Consultatant',empSalary:5000},
        {empNo:102, empName:'Ravi',empDesignation:'Sales',empSalary:2000},
        {empNo:103, empName:'Ram',empDesignation:'Consultatant',empSalary:8000},
        {empNo:104, empName:'Mohit',empDesignation:'HR',empSalary:12000},
        {empNo:105, empName:'Sumit',empDesignation:'Consultatant',empSalary:1000},
    ]


    displayEmployeeDetails()
    {
            this.topEmployeeDetails.map(function(emp,idx){
            console.log(emp.empNo);
            console.log(emp.empName);
            console.log(emp.empDesignation);
            console.log(emp.empSalary);
            console.log(emp.empSalary * 0.1,' As Bonus');
            console.log("-----------------------------")
        })
    }


        // filterFunction()
        // {
        //     this.topEmployeeDetails.filter((val,idx,array)=>{
        //         var result =  val.empSalary > 5000;
        //         return result;
        //     })
        // }

         myNumbers:number[] = [10,13,80,99,-30,-90,1120,330,-998];


         filterMyNumbers()
         {
            this.myNumbers.filter((nm,idx)=>{
                var result = nm > 200;
                return result;
            })
         }







    ArrowFunction()
    {
        this.topEmployeeDetails.map((emp,idx) =>{
            console.log(emp.empNo);
            console.log(emp.empName);
            console.log(emp.empDesignation);
            console.log(emp.empSalary);
            console.log(emp.empSalary * 0.1,' As Bonus');
            console.log("-----------------------------")
        })
    }   

    displayEmployees()
    {
        var emp = this.topEmployees.map(function(val,index){
                console.log("Position ",index," Employee Name : ",val);
        })
    }

}

var obj = new Employees();
// obj.displayEmployees();
// obj.displayEmployeeDetails();
// var result = obj.filterFunction();
var myresult = obj.filterMyNumbers();
console.log(myresult);













