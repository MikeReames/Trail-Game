class Traveler {
    constructor(name, //race
    ) {
        this.name = name
        //this.race = [Human, Dwarf, Night Elf, Gnome, Draenei, Worgen, Orc, Tauren, Troll, Undead, Blood Elf, Goblin, Pandaren]
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food < 1) {
            return this.isHealthy = false
        }
        else {
            this.food -= 1
        }

    }
}
class Wagon {
    constructor(seats) {
        this.capacity = seats
        this.party = []
        //this.faction = ('Horde', 'Alliance')
    }
    getAvailableSeatCount() {
        return (this.capacity - this.party.length)
    }
    join(traveler) {
        if (this.getAvailableSeatCount() <= 0) {
            return 'party is full'
        }
        else {
            this.party.push(traveler)
        }
    }
    shouldQuarantine() {
        const downWithDysentery = this.party.some(traveler => traveler.isHealthy === false)
        console.log(this.party)
        if (downWithDysentery === true) {
            return true
        }
        else { return false }
    }
    totalFood() {
        let allFood = 0
        for (let index = 0; index < this.party.length; index += 1) {
            allFood += this.party[index].food
        }
        return allFood
    }
}
let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(henrietta)
console.log(`Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`)