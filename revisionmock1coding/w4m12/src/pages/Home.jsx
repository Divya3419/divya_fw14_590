import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom"
const Home = () => {
  let [press, setPress] = useState("");
  let [data, setData] = useState([]);
  const ref = useRef(null);

  const handlePress = (e) => {
    setPress(ref.current.value);
    /// console.log(e)
    fetchData(e);
  };

  const fetchData = (e) => {
    if (e.key == "Enter") {
      axios
        .get(`https://api.github.com/users/${press}/repos`)
        .then((r) => setData(r.data))
        .catch((error) => error);
    }
  };
  return (
    <>
      <div>
        <h1>Search Github Profile</h1>
        <p>PRESS ENTER TWICE TO GET YOUR PROFILE</p>
        <input
          ref={ref}
          type=""
          defaultValue={press}
          onKeyPress={handlePress}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
          margin:"auto",
          marginTop: "50px",
          width:"90%",
          borderRadius:"10px"
        }}
      >
        {data.map((ele) => {
          return (
            <Link to={`/${ele.id}`} style={{textDecoration: 'none',color:"black"}}>

            <div
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                backgroundColor: "white",

              }}
              key={ele.id}
            >
              <p>Repo :{ele.name}</p>
              <p>Des : {ele.description}</p>
              <p>Date:{ele.created_at}</p>
              <p>Status:{ele.visibility}</p>
            </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
