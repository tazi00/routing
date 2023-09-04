import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/videos">Videos</NavLink>
            </li>
            <li>
              <NavLink to="/tools">Tools</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{<Outlet />}</main>
      <footer>
        <p>&copy; 2023 Your Website Name</p>
        <p>Contact: contact@example.com</p>
        <p>Address: 123 Main Street, City, Country</p>
      </footer>
    </>
  );
}

export default AppLayout;
