function prevDay(year, month, day){
    let date=new Date(year, month-1, day-1);
    let newDate=date.getDate();
    let newMonth=date.getMonth()+1;
    let newYear=date.getFullYear();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

prevDay(2016, 10, 1);