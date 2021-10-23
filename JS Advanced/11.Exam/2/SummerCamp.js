class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.find(p => p.name === name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        })

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const participant = this.listOfParticipants.find(p => p.name === name);
        if (!participant) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        const index = this.listOfParticipants.indexOf(participant);
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'WaterBalloonFights') {
            let player1 = this.listOfParticipants.find(p => p.name === participant1);
            let player2 = this.listOfParticipants.find(p => p.name === participant2);
            if (!player1 || !player2) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (player1.power === player2.power) {
                return `There is no winner.`;
            }
            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (player2.power > player1.power) {
                player2.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }

        } else if (typeOfGame === 'Battleship') {
            let player = this.listOfParticipants.find(p => p.name === participant1);
            if (!player) {
                throw new Error(`Invalid entered name/s.`);
            }
            player.power += 20;
            
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sorted.forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        return result.join('\n');
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));

console.log(summerCamp.toString());

