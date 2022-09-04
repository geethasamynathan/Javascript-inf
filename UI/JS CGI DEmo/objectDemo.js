var Employee={
    empNumber:101,
    name :"Geetha",
    Gender:'Female',
    emailId:'geethasamynathan2011@gmail.com',
    
    swipeIn(){console.log(" This is swipe in " +this.name)}
};

/*
console.log(Employee.empNumber);
Employee.empNumber=202;
console.log(Employee.empNumber);
Employee.swipeIn();
*/
// for(let prop in Employee)
// {
//     console.log(Employee[prop]);
// }
console.log(Object.values(Employee));

// {a, ...rest} =Employee;
// console.log(a);