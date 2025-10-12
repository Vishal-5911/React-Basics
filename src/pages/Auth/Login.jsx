import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

const Login = () => {
  const nav = useNavigate();
  let location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("locaton", location);

  const loginUser = () => {
    // login fn
    const obj = { Name: email, pass: password };
    localStorage.setItem("user-data", JSON.stringify(obj));
    nav("/dashboard", { replace: true });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Login up page</h1>
      <div
        style={{
          border: "1px solid grey",
          padding: 20,
          margin: "auto 20px",
          display: "grid",
          rowGap: 20,
        }}
      >
        <input
          placeholder="EMail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginUser}>Login</button>
      </div>
      <a href="/dashboard">A tag login</a>
      <NavLink to="/dashboard">submit</NavLink>
    </div>
  );
};

export default Login;
