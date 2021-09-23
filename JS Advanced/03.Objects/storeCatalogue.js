function sortCatalogue(catalogue) {
    const sortedCatalogue = {};

    catalogue.forEach((el) => {
        let [name, price] = el.split(' : ');
        price = Number(price);
        let index=name[0];
        if(!sortedCatalogue[index]){
            sortedCatalogue[index]={};
        }
        sortedCatalogue[index][name]=price;
    })

    let initialSort=Object.keys(sortedCatalogue).sort((a,b)=>a.localeCompare(b));

    for (const key of initialSort) {
        let products=Object.entries(sortedCatalogue[key]).sort((a,b)=>a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach((el)=>{console.log(`  ${el[0]}: ${el[1]}`)})
    }
}

sortCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)