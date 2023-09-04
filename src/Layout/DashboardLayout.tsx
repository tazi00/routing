import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function DashboardLayout() {
  return (
    <>
      <header>
        <NavLink to="">
          <h1>Dashboard</h1>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="partners">Partners</NavLink>{" "}
            </li>
            <li>
              <NavLink to="sponsers">Sponsers</NavLink>{" "}
            </li>
            <li>
              <NavLink to="stats">Stats</NavLink>{" "}
            </li>
            <li>
              <NavLink to="settings">Settings</NavLink>{" "}
            </li>
            <li>
              <NavLink to="..">Back to home page</NavLink>{" "}
            </li>
          </ul>
        </nav>
      </header>
      <main>{<Outlet />}</main>
      <footer>Dashboard footer</footer>
    </>
  );
}

export default DashboardLayout;
