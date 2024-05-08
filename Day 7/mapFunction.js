var Employees = /** @class */ (function () {
    function Employees() {
        this.topEmployees = ['Rohit', 'Karan', 'Khushboo', 'Mohit', 'Raman', 'Akash', 'Surbhi'];
        this.topEmployeeDetails = [
            { empNo: 101, empName: 'Nikhil', empDesignation: 'Consultatant', empSalary: 5000 },
            { empNo: 102, empName: 'Ravi', empDesignation: 'Sales', empSalary: 2000 },
            { empNo: 103, empName: 'Ram', empDesignation: 'Consultatant', empSalary: 8000 },
            { empNo: 104, empName: 'Mohit', empDesignation: 'HR', empSalary: 12000 },
            { empNo: 105, empName: 'Sumit', empDesignation: 'Consultatant', empSalary: 1000 },
        ];
        // filterFunction()
        // {
        //     this.topEmployeeDetails.filter((val,idx,array)=>{
        //         var result =  val.empSalary > 5000;
        //         return result;
        //     })
        // }
        this.myNumbers = [10, 13, 80, 99, -30, -90, 1120, 330, -998];
    }
    Employees.prototype.displayEmployeeDetails = function () {
        this.topEmployeeDetails.map(function (emp, idx) {
            console.log(emp.empNo);
            console.log(emp.empName);
            console.log(emp.empDesignation);
            console.log(emp.empSalary);
            console.log(emp.empSalary * 0.1, ' As Bonus');
            console.log("-----------------------------");
        });
    };
    Employees.prototype.filterMyNumbers = function () {
        this.myNumbers.filter(function (nm, idx) {
            var result = nm > 200;
            return result;
        });
    };
    Employees.prototype.ArrowFunction = function () {
        this.topEmployeeDetails.map(function (emp, idx) {
            console.log(emp.empNo);
            console.log(emp.empName);
            console.log(emp.empDesignation);
            console.log(emp.empSalary);
            console.log(emp.empSalary * 0.1, ' As Bonus');
            console.log("-----------------------------");
        });
    };
    Employees.prototype.displayEmployees = function () {
        var emp = this.topEmployees.map(function (val, index) {
            console.log("Position ", index, " Employee Name : ", val);
        });
    };
    return Employees;
}());
var obj = new Employees();
// obj.displayEmployees();
// obj.displayEmployeeDetails();
// var result = obj.filterFunction();
var myresult = obj.filterMyNumbers();
console.log(myresult);
