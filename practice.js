//Class and inheritance practice 1. Pairs. 09/23/2026 w/ Hiu C and Anu K
class Vehicle {
    constructor (type, make, model, year, mileage=0) {
        this.type = type; 
        this.make = make; 
        this.model = model; 
        this.year = year; 
        this.mileage = mileage; 
    }

    drive(distance) {
        this.mileage += distance; 
    }

    getDetails() {
        return `${this.type} ${this.year} ${this.make} ${this.model} ${this.mileage}`;
    }
}

const car = new Vehicle("sedan","toyota", "camry", 2019, 102345);
const truck = new Vehicle("truck","ford","explorer", 2020, 7000); 
const motorcycle = new Vehicle("sport", "kawasaki", "ninja", 2026);

car.drive(25);
console.log(car.getDetails());

truck.drive(100);
console.log(truck.getDetails());

motorcycle.drive(20); 
console.log(motorcycle.getDetails());