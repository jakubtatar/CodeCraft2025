class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hello my name is ", this.name, " and I am ", this.age, " years old.")
    }
}

let person = new Person("Anna", 18)
person.greet();

class Car{
    constructor(brand, color, seats, speed, fuel, comsumption, transmisson){
        this.brand = brand
        this.color = color
        this.seats = seats
        this.speed = speed
        this.fuel = fuel
        this.comsumption = comsumption
        this.transmisson = transmisson
    }

    typeInfo(){
        console.log("\nBrand: ", this.brand,
                    "\nColor: ", this.color,
                    "\nSeats: ", this.seats,
                    "\nTop speed: ", this.speed, "km/h",
                    "\nFuel: ", this.fuel,
                    "\nComsumption: ", this.comsumption, "l/100km",
                    "\nTransmission: ", this.transmisson
        )
    }
}

let ford = new Car("Ford Mustang", "Black", 2, 290, "Gasoline", 12.2, "Manual")
ford.typeInfo()