const degreeNumber = (num, deg) => {
    let res=num;
    for (let i=2; i<=deg;i++) 
      res=res*num;
    
    console.log(res)
  }
  
  degreeNumber(3,4);