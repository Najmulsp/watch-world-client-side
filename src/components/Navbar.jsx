import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo/watch logo.png"
import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
//     const { data } = await axios.post(`http://localhost:5000
// /logout`, user, {
//       withCredentials: true,
//     });
//     console.log(data);
    logout();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully logged out",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
      <li><NavLink to="/">Home</NavLink></li>     
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
          <div id="profileImg">
            <img
              className="w-12 md:w-12 lg:w-14  rounded-full "
              alt="profile picture"
              src={
                user?.photoURL ||
                "https://i.ibb.co/RPpmvwb/images-blank-profile.png"
              }
            />

            <div id="dropdown" className=" w-28 lg:w-40 rounded-lg z-30">
              <h1 className="p-2 bg-amber-400 dark:bg-gradient-to-r from-orange-500 via-amber-600 to-amber-700 rounded-lg text-center font-semibold  w-full">
                {user.displayName || "user name not found"}
              </h1>
              <button onClick={handleLogout} className="btn w-full bg-amber-600 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-purple-300">
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login"><button className="btn text-white bg-[#DAA82E]">Login</button>
  </Link>
        )}
    </div>
</div>
        </div>
    );
};

export default Navbar;