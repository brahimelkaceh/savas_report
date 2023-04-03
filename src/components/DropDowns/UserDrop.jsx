import "./userDrop.css";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import LinkBtn from "../buttons/LinkBtn";
import { useState } from "react";
import { useSelector } from "react-redux";

const data = [
  {
    id: 1,
    name: "Profile",
    icon: <FaUser />,
  },
  {
    id: 2,
    name: "Logout",
    icon: <FiLogOut />,
  },
];
const UserDrop = () => {
  const dropState = useSelector((state) => state.userDrop.dropState);

  const [menu, setMenu] = useState(data);
  return (
    <div
      className={
        !dropState
          ? "user__drop-container scale-out-tr"
          : "user__drop-container scale-in-tr"
      }
    >
      <div className="user__drop-container_btns">
        {menu.map((m) => {
          return <LinkBtn key={m.id} {...m} />;
        })}
      </div>
    </div>
  );
};

export default UserDrop;
