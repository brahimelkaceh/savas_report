import { useContext } from "react";
import "./linkBtn.css";
import { FiLogOut } from "react-icons/fi";
import AuthContext from "../../context/AuthContext";

const LinkBtn = () => {
  let { logOut } = useContext(AuthContext);
  return (
    <button className="logout-btn" onClick={logOut}>
      <FiLogOut />
      Logout
    </button>
  );
};

export default LinkBtn;
