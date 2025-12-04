import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Employform.module.css";

const Table = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3002/employ`).then((r) => {
      setShow(r.data);
    });
  }, []);
  return (
    <div>
      <table className={styles.tab} border="1">
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>ADDRESS</th>
            <th>DEPARTMENT</th>
            <th>SALARY</th>
            <th>MARITAL STATUS</th>
          </tr>
        </thead>
        <tbody>
          {show.map((props) => {
            return (
              <tr key={props.id}>
                <td>{props.username}</td>
                <td>{props.age}</td>
                <td>{props.address}</td>
                <td>{props.department}</td>
                <td>{props.salary}</td>
                <td>{props.married}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
