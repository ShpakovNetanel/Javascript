let weeklySalary = (...x) => {
     let salary = 0
     for(let i=0; i<x.length; i++){
          console.log(x.length);
          if(parseInt(x[i]) <= 8 && i < 5){
               salary +=  10 * parseInt(x[i])
          } else if(parseInt(x[i]) > 8 && i < 5){
               salary += (parseInt(x[i]) - 8) * 15 + 8 * 10
          } else if(parseInt(x[i]) <= 8 && i > 5){
               salary += 10 * parseInt(x[i]) * 2
          } else if(parseInt(x[i]) > 8 && i > 5){
               salary += ((parseInt(x[i]) - 8) * 15 + 8 * 10) * 2
          }
     }

     return salary
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]));