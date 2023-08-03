import React,{ Fragment } from "react";
import { Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </Fragment>
  )
};

export default Layout;