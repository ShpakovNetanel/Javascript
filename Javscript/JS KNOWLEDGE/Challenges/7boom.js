let sevenBoom = (...x) => {
     for(let i=0; i<x.length; i++){
          if(x[i].includes(7)){
               return "Boom"
          }
     }
     return "there is no 7 in the array"
}

console.log(sevenBoom([1, 5, 9, 87, 5]))

