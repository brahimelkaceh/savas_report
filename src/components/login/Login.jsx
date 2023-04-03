import SendBtn from "../buttons/SendBtn";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginForm } from "../../slices/Login";

let base_url = "https://pouliprod.savas.ma/api/";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const status = useSelector((state) => state.loginForm.status);
  const dispatch = useDispatch();

  return (
    <main
      style={{
        width: "40%",
      }}
    >
      <form className="form">
        <div className="input-container ic2">
          <input
            type="text"
            name="user-name"
            id="userName"
            className="input"
            placeholder=" "
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
        {/* <Link to="/">
          <button onClick={loginForm()}>Click</button>
        </Link> */}

        <button
          onClick={(e) => {
            e.preventDefault();
            const data = { username: userName, password: password };
            fetch(`${base_url}token`, {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) =>
                localStorage.setItem("authTokens", JSON.stringify(data))
              )
              .catch((error) => console.error(error));
            console.log(data);
            dispatch(loginForm());
          }}
        >
          Click
        </button>
      </form>
      <h2>{userName}</h2>
    </main>
  );
};

export default Login;
