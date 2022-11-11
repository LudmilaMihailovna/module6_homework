function acceptNumber1(num1) {
    return function(num2) {
      return num1+num2;
    }
  }
  const arg1=11;
  const arg2=22;
  console.log(acceptNumber1(arg1)(arg2));