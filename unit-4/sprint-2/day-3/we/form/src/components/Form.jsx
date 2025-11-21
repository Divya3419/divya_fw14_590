import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    let { name,type} = e.target;
setForm({ ...form,[name]:type==="checkbox"?e.target.checked:type==="file"?e.target.files:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required/>
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required/>
        </div>
        <div>
          <label>Age</label>
          <input type="number" name="age" onChange={handleChange} required/>
        </div>

        <div>
          <label>isIndian</label>
          <input type="checkbox" name="isIndian" onChange={handleChange} required />
        </div>
        <div>
          <label>male</label>
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>female</label>
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>resume</label>
          <input type="file" name="resume" onChange={handleChange} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
