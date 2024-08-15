import { Link } from "react-router-dom";
import logo from "../../public/logo/watch logo.png"

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="">
        <img src={logo} alt="logo" className="w-40 h-16"/>        
        </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>     
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login"><button className="btn text-white bg-[#DAA82E]">Login</button>
  </Link></div>
</div>
        </div>
    );
};

export default Navbar;