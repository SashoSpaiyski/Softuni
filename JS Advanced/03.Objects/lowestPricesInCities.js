function printLowestPrices(data) {
    const catalogue={};

    data.forEach((el)=>{
        let [town, product, price]= el.split(' | ');
        price=Number(price);

        if(!catalogue[product]){
            catalogue[product]={};
        }
        catalogue[product][town]=price;
    })

    for (const product in catalogue) {
        let sorted=Object.entries(catalogue[product]).sort((a,b)=> a[1]-b[1]);
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

printLowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 3',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 2',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);