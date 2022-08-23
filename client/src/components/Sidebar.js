import "../App.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li> Dashboard</li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/sales">Sales</Link>
        </li>

        <li>Analytics</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
