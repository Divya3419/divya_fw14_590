import React, { useState } from 'react'
import styles from './Form.module.css'


export const Form = () => {
const[formData,setFormdata]=useState({});


const handleChange=(e)=>{
    //console.log(e.target.name);
    const inputName=e.target.name;
    
    if(e.target.type==="checkbox"){
        setFormdata({...formData,[inputName]:e.target.checked})
    }
    else if(e.target.type==="file"){
        setFormdata({...formData,[inputName]:e.target.file})
    }
    
    
    else{
        setFormdata({...formData,[inputName]:e.target.value})  
    }
    
}
    const handleSubmit=(e)=>{

e.preventDefault();
console.log(formData);
    }



  return (
      <div className={styles.formgrid}><h1>FORM</h1> 
      <form onSubmit={handleSubmit}>
      <div >
          <label >Username</label>
          <input type="text" name="username" onChange={handleChange}/>
      </div>
       <div>
       
     <label>Password</label>
    <input type={formData.showpass ? "text":"password"} name="password" onChange={handleChange}/>
            <div>
      <input type="checkbox"  name="showpass" onChange={handleChange}/>
          <label>Show password</label>
          
      </div>
      </div>
      <div>
          <label>Age</label>
          <input type="number" name="age" onChange={handleChange} />
      </div>
      <div>
          <label>Gender</label>
<input type="radio" name="genderRadio" value="male" onChange={handleChange} />Male
<input type="radio" name="genderRadio" value="female" onChange={handleChange} />Female
      </div>
      <div>
          <label>DOB</label>

          <input type="date" name="dob" onChange={handleChange} />
      </div>

<div>
    <label >Resume</label>
    <input type="file" name="resume" onChange={handleChange}/>
</div>


      <input type="submit" name="submit"  id="btn"  />
      
      </form>
      </div>
  )
}
export default Form