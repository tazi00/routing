import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Partners() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="1">partner 1 </NavLink>
            </li>
            <li>
              <NavLink to="2">partner 2 </NavLink>
            </li>
            <li>
              <NavLink to="3">partner 3 </NavLink>
            </li>
            <li>
              <NavLink to="4">partner 4 </NavLink>
            </li>
            <li>
              <NavLink to="new">New partner </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        partner pages
        {<Outlet />}
      </main>
    </div>
  );
}

export default Partners;
