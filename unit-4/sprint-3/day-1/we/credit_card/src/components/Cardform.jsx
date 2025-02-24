import  React,{useState} from 'react';
import { Creditcard } from './Creditcard';
import { Input, Outer, Grid, First } from './Styled';

export const Cardform=()=>{
const[formDetail,setFormdetail]=useState({})


const handleChange=(e)=>{
const inputName=e.target.name;
setFormdetail({...formDetail,[inputName]:e.target.value});
}

    const handleSubmit=(e)=>{

        e.preventDefault();
        console.log(formDetail);
    }

    return(
        
        
        
            <Outer>
     
         <First>
        <h1>Payment Details</h1>
    <form  onSubmit={handleSubmit}>
            <div>
            <label>CARDHOLDER NAME</label>
            
            <br />
 <Input type="text" name="username" onChange={handleChange}/>
            </div>   
            <div>
                <label>CARD NUMBER</label>
                <br />
 <Input type="number" name="cardnumber"onChange={handleChange}/>
            </div> 
        <Grid>
            <div>
            <label style={{textAlign: 'left'}}>EXPIRY MONTH</label>
            <br />
            <Input int1 type="number" name="expiry_month" onChange={handleChange} />
            </div>

            <div>
            <label>EXPIRY YEAR</label>
            <br />
            <Input int2 type="number" name="expiry_year" onChange={handleChange}/>
            </div>
            <div>
            <label >CVV</label>
            <br />
            <Input int3 type="number" name="cvv"onChange={handleChange} />
            </div>
        </Grid>
        <Input int4 type="submit" value="Pay" />
           </form>
           </First>
    
    <Creditcard value={formDetail}/>
    
    </Outer>
    
    )
}