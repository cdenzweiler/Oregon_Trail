console.log("november something...")





class Traveler {
    constructor(name, food, isHealthy,) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true
    }

    hunt() {
        this.food += 2;
        document.body.innerHTML = (this.name + " returned with more food. " + this.name + " now has "+ this.food + " remaining");
    };

    eat() {

        if (this.food < 1) {
            this.isHealthy = false;
            document.body.innerHTML = (this.name + " has no more food! Now " + this.name + " is sick.")
        } else {
        this.food -= 1;
        document.body.innerHTML = (this.name + " ate some food and now has: " + this.food + " remaining.")
        }
    }
}


const Debbie = new Traveler("Debbie")

class Wagon {
    constructor(capacity, []) {
        this.capacity = 5;
        this.passengers = [];
    };

    getAvailableSeatCount() {
        return this.capacity
    };

    join(name) {
        if (this.capacity >= 1) {
            this.capacity -= 1;
            this.passengers.push(name)
            console.log(name + " has joined the wagon.")
        } else (
            console.log("No seats available")
        )
        return document.body.innerHTML = (this.capacity + " seats remain on the wagon.")
    };

    shouldQuarantine() {
        if (passengers.isHealthy == false) {
            return true

        } else {
           return false

        }
        
    };
    totalFood() {
        
        
    }
}

let Freedom = new Wagon(5, [])
// console.log(Freedom.numWheels)
Freedom.join(Debbie)

