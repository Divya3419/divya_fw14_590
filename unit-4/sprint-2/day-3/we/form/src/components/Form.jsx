import React,{useState} from 'react'

const Form = () => {
    const[form,setForm]=useState({})


 const handleChange=(e)=>{
let{name,value,type,checked,files}=e.target

if(type==="checkbox"){
    setForm({...form,[name]:checked})
}
else if(type==="file"){
    setForm({...form,[name]:files})
}

else{
    setForm({...form,[name]:value})
}

    }

 const handleSubmit=(e)=>{

 e.preventDefault();
console.log(form)
    }


  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
<div>
    <label>Name</label>
    <input type="text"  name="username" onChange={handleChange}/>
</div>
<div>
    <label>Email</label>
    <input  type="text"  name="email" onChange={handleChange}/>
</div>

<div>
    <label>Password</label>
<input type="password" name="password" onChange={handleChange}/>
</div>
<div>
    <label>Age</label>
    <input type="number" name="age" onChange={handleChange}/>
</div>

<div>
    <label>isIndian</label>
    <input type="checkbox"  name="isIndian" onChange={handleChange}/>
</div>
<div>
    <label>male</label>
    <input type="radio" value="Male" name="gender" onChange={handleChange}/>
</div>

<div>
    <label>female</label>
    <input type="radio" value="Female" name="gender" onChange={handleChange}/>
</div>

<div>
    <label>resume</label>
    <input type="file" name="resume" onChange={handleChange}/>
</div>
<input type="submit" />

</form>
    </div>
  )
}

export default Form