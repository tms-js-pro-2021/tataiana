import React, { useEffect, useState } from "react";

export default function App() {
  const [login, setLogin] = useState("login222");
  const [password, setPassword] = useState("sdf");

  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounting");
    };
  }, []);
  const handleLoginClick = () => {
    setLogin("");
  };

  return (
    <div style={{ background: "blue" }}>
      <button onClick={() => setLogin("login")}>mount</button>
      {login &&
        <button onClick={handleLoginClick}>
          {login}
        </button>}
    </div>
  );
}


