import "./linkBtn.css";
const LinkBtn = ({ name, icon }) => {
  return (
    <button className="btn">
      {/* {icon} */}
      {name}
    </button>
  );
};

export default LinkBtn;
