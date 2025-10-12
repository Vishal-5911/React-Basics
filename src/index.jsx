import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import Home from "./pages/Dashboard/Home";
import Users from "./pages/Dashboard/Users";
import DashboardLayout from "./layout/DashboardLayout";
import DefaultLayout from "./layout/DefaultLayout";
createRoot(document.getElementById("my-app")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
