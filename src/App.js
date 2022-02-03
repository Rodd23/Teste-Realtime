import React, { useState, useEffect } from "react";
import api from "./api";
import Users from "./components/Users";

function App() {
  
  const [user, setUser] = useState("");
  const [data, setData] = useState(0);

  useEffect(()=>{
   getUser() 
  },[])

  useEffect(()=> {
    setTimeout(()=> {
      setData(data + 1)
      getUser()
      console.log(user)
    },10000)
  },[data])

  function getUser() {
    api.get("/signup").then((user)=> {
      user.data.map(user => setUser(user.name))
    })
  }

  return (
    <div className="App">
     <Users name={user}/>
    </div>
  );
}

export default App;
