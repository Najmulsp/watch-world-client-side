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
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 px-2 lg:px-4  py-2 rounded-lg bg-amber-500 font-bold text-black"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 px-2 lg:px-4 py-2 rounded-lg bg-amber-500 font-bold text-black"
              : ""
          }
          to="/allproducts"
        >
          All Products
        </NavLink>
      </li>
      </>
  );
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
            className=" dropdown-content mt-3 z-[1] pl-4 pb-4 shadow bg-base-100 rounded-box w-52 space-y-3 "
          >
            {navlinks}
          </ul>
    </div>
    <a className="">
        <img src={logo} alt="logo" className="w-40 h-16"/>        
        </a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="flex gap-4  px-1">{navlinks}</ul>
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