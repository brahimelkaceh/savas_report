import { useState, useRef, useEffect, useContext } from "react";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { loginForm } from "../../slices/Login";
import AuthContext from "../../context/AuthContext";

let base_url = "https://pouliprod.savas.ma/api/";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const status = useSelector((state) => state.loginForm.status);
  const dispatch = useDispatch();

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <span ref={errRef} name="errMsg">
          {errMsg}
        </span>
        <form className="form" onSubmit={loginUser}>
          <div className="input-container ic2">
            <input
              type="text"
              name="username"
              id="username"
              className="input"
              placeholder=" "
              autoComplete="off"
              required
              ref={userRef}
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <div className="cut"></div>
            <label htmlFor="userName" className="placeholder">
              User Name
            </label>
          </div>
          <div className="input-container ic2">
            <input
              type="text"
              name="password"
              id="password"
              className="input"
              placeholder=" "
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="cut"></div>
            <label htmlFor="password" className="placeholder">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="login-btn"
            // onClick={(e) => {
            //   e.preventDefault();
            //   const data = { username: userName, password: password };
            //   fetch(`${base_url}token`, {
            //     method: "POST",
            //     body: JSON.stringify(data),
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //   })
            //     .then((response) => response.json())
            //     .then((data) =>
            //       localStorage.setItem("authTokens", JSON.stringify(data))
            //     )
            //     .catch((error) => console.error(error));
            //   console.log(data);
            //   dispatch(loginForm());
            // }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
