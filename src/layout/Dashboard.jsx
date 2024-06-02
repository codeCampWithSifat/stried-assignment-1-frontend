import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-11/12 mx-auto">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-indigo-600 text-white">
            {/* Sidebar content here */}
            <li>
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/dashboardHome">
                <RxDashboard />
                All Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
