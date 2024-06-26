import React from "react";
import {
  FaHome,
  FaBell,
  FaUsers,
  FaBoxOpen,
  FaChevronRight,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdOutlineInventory2, MdQueryStats } from "react-icons/md";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="flex min-h-screen bg-neutral-800 text-white">
      <div className="w-64 bg-neutral-800">
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-gray-300 rounded-md"></div>
            <div>
              <div className="text-lg font-bold">GadgetGalaxy</div>
            </div>
          </div>
          <FaChevronRight className="h-6 w-6 cursor-pointer" />
        </header>

        <nav className="mt-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label} className="group">
                <Link
                  to={item.link}
                  className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-300"
                >
                  <item.icon className="h-6 w-6 text-white" />
                  <span className="text-white">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      {/* <div className="flex-1">
        Add your main content here
        <h1>Main Content Area</h1>
      </div> */}
    </div>
  );
};

const menuItems = [
  { label: "Dashboard", link: "/AdminDashboard", icon: FaHome },
  { label: "Add Products", link: "/AddProduct", icon: MdOutlineInventory2 },
  { label: "Edit Product", link: "#", icon: FaBell },
  { label: "Users", link: "#", icon: FaUsers },
  { label: "Querys", link: "#", icon: MdQueryStats },
  { label: "Orders", link: "#", icon: FaBoxOpen },
  { label: "Logout", link: "#", icon: FaSignOutAlt },
];

export default App;
