import "../styles/report.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Modification = () => {
  const statusbar = useSelector((state) => state.toggleLeftBar.statusbar);

  return (
    <main className={statusbar === true ? "page page-with-sidebar " : "page"}>
      <h2>Modification</h2>
      <Link to="/">Report Page</Link>
    </main>
  );
};

export default Modification;
