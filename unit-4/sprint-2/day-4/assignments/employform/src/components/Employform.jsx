import React, { useState } from "react";
import styles from "./Employform.module.css";
import Table from "./Table";
import axios from "axios";

export const Employform = () => {
  const [formDetail, setFormdetail] = useState({});

  const handleChange = (e) => {
    const inputName = e.target.name;

    if (e.target.type === "checkbox") {
      setFormdetail({ ...formDetail, [inputName]: e.target.checked });
    } else {
      setFormdetail({ ...formDetail, [inputName]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post(`http://localhost:3002/employ`,formDetail ).then((r) => {
     console.log("data posted",r.data)
   }).catch((err) => {
     console.log(err);
   })
  };
  return (
    <div className={styles.outer}>
      <div className={styles.emform}>
        <h1>Employdetail Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>

          <div>
            <label>Age</label>

            <input
              type="number"
              name="age"
              onChange={handleChange}
              placeholder="Enter Age"
            />
          </div>

          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Enter Address"
            />
          </div>

          <div>
            <label>Department</label>
            <select
              style={{ borderRadius: "10px" }}
              name=" department"
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option value="Tech">Techanical</option>
              <option value="Non-Tech">Non-Techanical</option>
            </select>
          </div>
          <div>
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              onChange={handleChange}
              placeholder="Enter salary"
            />
          </div>
          <div>
            <input type="checkbox" name="married" onChange={handleChange} />
            <label>Marital state</label>
          </div>
          <div>
            <input type="submit" id={styles.btn} />
          </div>
        </form>
      </div>

      <Table />
    </div>
  );
};
