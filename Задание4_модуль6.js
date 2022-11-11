function getNumber(num1, num2) {
    for (let i=num1; i<=num2; i++) {
      setTimeout(() => {
        console.log(i); 
      }, 1000*(i-num1+1));
    }
  }
  getNumber(5,7);