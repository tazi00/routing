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
        <p>Copy wright claim</p>
      </footer>
    </>
  );
}

export default AppLayout;
