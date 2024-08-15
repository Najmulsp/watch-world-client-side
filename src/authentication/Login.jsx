import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password);
  };

  const handleGoogleLogin = async () => {
    const result = await googleLogin();
    console.log(result.user);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully logged in",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <section
        style={{
          backgroundImage: `url('../../public/logo/login bg.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 90,
        }}
        className="dark:bg-gray-100 dark:text-gray-800"
      >
        <div className="container flex items-center justify-center p-6 mx-auto sm:py-12 lg:py-24  ">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="flex bg-blue-950 bg-opacity-70 flex-col max-w-md p-6 rounded-md sm:p-10 border border-amber-500 text-white">
              <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm ">Sign in to access your account</p>
              </div>
              <div className="mb-6">
                <button
                  onClick={handleGoogleLogin}
                  aria-label="Login with Google"
                  type="button"
                  className="flex bg-amber-500 bg-opacity-70 items-center justify-center w-4/5 mx-auto space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-amber-600 focus:ring-blue-600"
                >
                  <FcGoogle className="text-4xl" />
                  <p className="">Login with Google</p>
                </button>
              </div>
              <form onSubmit={handleLogin} className="space-y-12">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm">Email address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-3 py-2 border rounded-md  bg-amber-600 bg-opacity-50"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm">Password</label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      className="w-full px-3 py-2 border rounded-md  bg-amber-600 bg-opacity-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <button
                      type="Submit"
                      className="w-full px-8 py-3 font-semibold rounded-md bg-amber-600 text-gray-50"
                    >
                      Sign in
                    </button>
                  </div>
                  <p className="px-6 text-sm text-center ">
                    Don't have an account yet?
                    <Link
                      to="/register"
                      className="hover:underline  text-amber-600 font-extrabold"
                    >
                      {" "}
                      Register
                    </Link>
                    
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
