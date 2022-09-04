class Employee{
    constructor(id,name,age)
    {
        this.id=id;
        this.name=name;
        this.age=age;
    }

    SwipeIn()
    {
        console.log("Employee " + this.id +"  has swiped in at" + new Date());
    }
     static Code()
     {
        console.log("Employee id Coding");
     }
}

class PartTimeEmployee extends Employee
{
    constructor(id,name,age,contractPeriod)
    {
        super(id,name,age);
        this.contractPeriod=contractPeriod;
    }
    displayEmplinfo()
    {
        console.log("Employee " + this.id +" name="+this.name+"  Age = "+
        this.age +"  Contract Period= "+ this.contractPeriod);
    }
}
e1=new Employee(101,'Fransy',23);
e2=new PartTimeEmployee(102,'Kalai',34,1);
e1.SwipeIn();
e2.displayEmplinfo();
Employee.Code();