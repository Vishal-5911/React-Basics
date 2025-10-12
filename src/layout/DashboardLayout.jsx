import { Navigate, Outlet, useNavigate } from "react-router";

const DashboardLayout = () => {
  const user = localStorage.getItem("user-data");
  const nav = useNavigate();

  const onLogout = () => {
    // logic to logout user
    localStorage.removeItem("user-data");
    nav("/", {
      replace: true,
    });
  };

  if (!user) {
    // redirect user to login page
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <div className="dasboard-header border">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Dashboard Layout</h1>
          <button style={{ height: 28 }} onClick={onLogout}>
            Log out
          </button>
        </div>
        <ul className="header-menu">
          <li> Home</li>
          <li> Users</li>
        </ul>
      </div>
      <div style={{ width: "100%", display: "flex", height: "80vh" }}>
        <div className="sidebar border" style={{ width: 286 }}>
          <ul className="sidebar-menu">
            <li> Home</li>
            <li> Users</li>
          </ul>
        </div>
        <div className="content border" style={{ flex: "1 0 0" }}>
          <div className="child-page">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
