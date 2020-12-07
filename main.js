console.log("December seventh...")
class Traveler {
    constructor(name1) {
        this.name = name1;
        this.food = 1;
        this.isHealthy = true
    }

    hunt() {
        this.food += 2;
    };

    eat() {

        if (this.food < 1) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = [];
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(name) {
        if (this.getAvailableSeatCount() >= 1) {

            this.passengers.push(name)
            console.log(Traveler.name + " has joined the wagon.")
        } else (
            console.log("No seats available")
        )
    }
    shouldQuarantine() {

        for (let i = 0; i < this.passengers.length; i++) {

            if (this.passengers[i].isHealthy == true) {
            } else {
                return true
            }
        }
        return false
    }
    totalFood() {

        let foodCount = 0;
        for (let i = 0; i < this.passengers.length; i++) {
            foodCount += this.passengers[i].food

        }
        return foodCount
    }
}