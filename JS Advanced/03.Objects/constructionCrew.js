function modify(worker){
    if(worker.dizziness==true){
        worker.levelOfHydrated=worker.levelOfHydrated+(worker.experience*worker.weight*0.1);
        worker.dizziness=false;
    }
    return worker;
}

console.log(modify({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }  
  ));