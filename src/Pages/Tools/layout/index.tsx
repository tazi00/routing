import React from "react";
import { Link, Outlet } from "react-router-dom";

function ToolLayout() {
  return (
    <div className="inner-page">
      <div className="innerpage-header">
        <nav>
          <ul>
            <li>
              <Link to="calculator">Calculator</Link>
            </li>
            <li>
              <Link to="translator">Translator</Link>
            </li>
            <li>
              <Link to="converter">Converter</Link>
            </li>
            <li>
              <Link to=".." relative={"path"}>
                back
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="toolssec-body">{<Outlet />}</div>
    </div>
  );
}

export default ToolLayout;
