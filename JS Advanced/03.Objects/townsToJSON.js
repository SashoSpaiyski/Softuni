function printJSON(arr){
    const towns=[];
    for (let i=1;i<arr.length;i++){
        let [Town, Latitude, Longitude]=arr[i].split(' | ');
        Latitude=Number(Number(Latitude).toFixed(2));
        Longitude=Number(Number(Longitude.split(' ')[0]).toFixed(2));
        Town=Town.slice(2);
        towns.push({Town, Latitude, Longitude});
    }

    console.log(JSON.stringify(towns));
}


printJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);