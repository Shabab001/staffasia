export const isEmpty=(values)=>{
    console.log(values)
 for(let i=0; i < values.length;i++){
      if(values[i]===""){
          console.log("here")
          return true
      }
     
  };
  return false
}