import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";

const AuthLayout = () => {
  const params = useParams(); 
  const [locationInfo, setParams] = useSearchParams();
  const { state } = useLocation();
  const changePage = () => {
    setParams((prev) => {
      prev.set("page", Number(prev.get("page")) + 1);
      return prev;
    });
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div>
        <p>Layout right side</p>
        <h1>Dynamic Route Value:{JSON.stringify(params)}</h1>
        <h2>Search Params{locationInfo.get("page")}</h2>
        <h3>Location: {JSON.stringify(state)}</h3>
        <button onClick={changePage}>go next page</button>
      </div>
      <Outlet />
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    const params = new URLSearchParams();
    params.set("page", 1);
    params.set("limit", 10);
    const data = {
      name: "hello",
      email: "test@test.com",
    };
    navigate(`/auth/v1/signup/from-login?${params.toString()}`, {
      state: data,
    });
  };
  return (
    <div>
      <span>LOgin Page</span>
      <button onClick={navigateToSignup}>ALready registred?</button>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route index element={<span>Home</span>} />
      <Route path="about" element={<span>About</span>} />

      <Route path="auth" element={<AuthLayout />}>
        <Route path="v1">
          <Route path="login" element={<Login />} />
          <Route path="signup/:hello?" element={<span>Register</span>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;