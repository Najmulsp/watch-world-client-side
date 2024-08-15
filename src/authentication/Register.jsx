import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = e =>{
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(name, email, password)

		createUser(email, password)
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "User has created successfully",
			showConfirmButton: false,
			timer: 1500
		  });
	}


    return (
        <div>
            <section
            style={{
				backgroundImage: `url('../../public/logo/login bg.jpg')`,
				backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 90,
			  }}
            className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex items-center justify-center p-6 mx-auto sm:py-12 lg:py-24  ">
		<div className="flex justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <div className="flex bg-blue-950 bg-opacity-70 flex-col max-w-md p-6 rounded-md sm:p-10 border border-amber-500 text-white">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register</h1>
		<p className="text-sm ">Sign up to access your account</p>
	</div>
	<form onSubmit={handleRegister}  className="space-y-12">
		<div className="space-y-4">
			<div>
				<label className=" mb-2 text-sm">Name</label>
				<input type="text" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md bg-amber-600 bg-opacity-50 " />
			</div>
			<div>
				<label  className=" mb-2 text-sm">Email address</label>
				<input type="email" name="email"  placeholder="Your Email" className="w-full px-3 py-2 border rounded-md  bg-amber-600 bg-opacity-50" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password"  placeholder="Password" className="w-full px-3 py-2 border rounded-md  bg-amber-600 bg-opacity-50" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md  bg-amber-600 ">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center ">Already have an account
				<Link to="/login"  className="hover:underline text-amber-600 font-extrabold"> Login</Link>
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

export default Register;