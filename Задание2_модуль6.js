function determNumber (num) {
    if (num == 0 || num == 1) {
       return 'число не простое'
     }
    if (num>1000 && num<0) {
      return 'данные не верные';
    } 
     else {
       for (let i=2; i<num; i++) {
         if (num % i == 0) {
           return 'число не простое'
         } else {
           return 'число простое'
         }
       }
     }
      return 'данные не верные';
  }
  const str1=determNumber(13);
  console.log(str1);