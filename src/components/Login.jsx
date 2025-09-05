import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN", payload: { email, password } });
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        minWidth: "350px",
        padding: "32px",
        borderRadius: "12px",
        background: "#f7f5ff",
        boxShadow: "0 2px 24px rgba(60,0,112,0.11)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h1 style={{
          color: "#632BC6",
          marginBottom: "32px",
          fontSize: "2.5rem"
        }}>Redux Auth</h1>
        <form onSubmit={submitHandler} style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              fontSize: "1.1rem",
              width: "100%",
              marginBottom: "10px"
            }}
            required
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              fontSize: "1.1rem",
              width: "100%",
              marginBottom: "10px"
            }}
            required
          />
          <button type="submit" style={{
            padding: "10px 0",
            background: "#632BC6",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontSize: "1.1rem",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
