//primitive data types
var myName = "Nikhil Shah";
var myHeight = 6.4;
var isPermenant = true;
var mySkills = ['Angular', 'Azure', 'AWS', 'Node', 'React', 'Typescript', 'MSBI', 'DataBricks'];
console.log(myName);
console.log(myHeight);
console.log(isPermenant);
console.log(mySkills);
var productInfo;
productInfo = [101, 'Pepsi', 'Cold-Drink', 50, '25-01-2024', true];
console.log(productInfo[2]);
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Bus"] = 1] = "Bus";
    Vehicles[Vehicles["Bike"] = 2] = "Bike";
    Vehicles[Vehicles["Truck"] = 3] = "Truck";
})(Vehicles || (Vehicles = {}));
var myTravelModeis = Vehicles.Car;
console.log(myTravelModeis);
