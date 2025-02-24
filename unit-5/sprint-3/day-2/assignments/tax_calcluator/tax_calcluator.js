const taxCalculator=(income,saving)=>{
    if(typeof income==="string"){
        return
    }
   if(income<250000){
       return "No Tax"
   }
   else if(income>250000 && income<500000){
       if(saving===0){
        let taxIncome= income-250000
        let tax=  (10/100)*taxIncome
          return tax
       }
       if(saving >0){
           let newsaving= Math.floor(saving/2)
           let taxIncome= income-250000-newsaving
          let tax=  (10/100)*taxIncome
          return tax
       }
       
   }
   else if(income>500000 && income<1000000){
       if(saving===0){
        let taxIncome= income-500000
        let tax=  (20/100)*taxIncome
        return 25000 + tax
       }else{
        let newsaving= (30/100)*saving
        let taxIncome= income-500000-newsaving
        let tax=  (20/100)*taxIncome
        return 25000 + tax
       }
    
    }
    else if(income>100000){
        if(saving===0){
            let taxIncome= income-1000000
            let tax=(30/100)*taxIncome
            return tax + 25000 + 50000
        }else{
            let newsaving= (10%100)*saving  
            let taxIncome= income-1000000-newsaving
            let tax=(30/100)*taxIncome
            return tax + 25000 + 50000
        }
        
}
}
module.exports=taxCalculator
console.log(taxCalculator(1200000,10000))
Foot