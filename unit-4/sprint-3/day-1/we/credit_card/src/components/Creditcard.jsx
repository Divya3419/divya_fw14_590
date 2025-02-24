import  React from 'react';


import { Card, Cip, Detail, Logo, Num } from './Styled';

export const Creditcard=(props)=>{
    console.log(props);
    return(
        
      <Card> 
                 
      <Logo src="https://www.gavi.org/sites/default/files/investing/funding/visa-foundation.jpg" alt="logo" />
         
            
      <Cip  src="https://thumbs.dreamstime.com/b/credit-card-chip-closeup-116257075.jpg" alt="" />
          
   <Num>{props.value.cardnumber}</Num>

  
   <Detail>

 <div>
   <p>Card Holder</p>
 <p>{props.value.username}</p>

  </div>

  <div>
  <p>EXPIRES</p>
<p>{props.value.expiry_year}/{props.value.expiry_month}</p>

  </div>
 <div>
 <p>CVV</p>
 <p>{props.value.cvv}</p>
</div> 

</Detail>

</Card>

        
    )
}