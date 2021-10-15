function solve(array, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price),
                this.status = status
        }
    }

    const tickets = [];

    array.forEach(str => {
        let tokens = str.split('|');
        tickets.push(new Ticket(tokens[0], tokens[1], tokens[2]))
    });

    if(sortingCriteria=='price'){
        return tickets.sort((a,b)=>a[sortingCriteria]-(b[sortingCriteria]));
    }
    return tickets.sort((a,b)=>a[sortingCriteria].localeCompare(b[sortingCriteria]));
}




let tik=solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);

tik.forEach(console.log)