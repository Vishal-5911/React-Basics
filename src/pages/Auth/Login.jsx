import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import "./Login.css";
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
    <div class="wrapper">
        <span class="rotate-bg"></span>
        <span class="rotate-bg2"></span>
        <div class="form-box login">
            <h2 class="title animation">Login</h2>
            <form action="#">
                <div class="input-box animation">
                    <input type="text" required=""/>
                    <label>Username</label>
                    <i class="bx bxs-user"></i>
                </div>
                <div class="input-box animation">
                    <input type="password" required=""/>
                    <label>Password</label>
                    <i class="bx bxs-lock-alt"></i>
                </div>
                <button href = "/dashboard" type="submit" class="btn animation">Login</button>
                <div class="linkTxt animation">
                    <p>Don't have an account? <a href="#" class="register-link">Sign Up</a></p>
                </div>
            </form>
        </div>
    </div>
      {/* <a href="/dashboard">A tag login</a> */}
      <NavLink to="/dashboard">submit</NavLink>
    </div>
  );
};
export default Login;
