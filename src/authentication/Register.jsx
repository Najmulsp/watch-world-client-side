import { Link } from "react-router-dom";


const Register = () => {
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
        <div className="flex bg-blue-950 bg-opacity-70 flex-col max-w-md p-6 rounded-md sm:p-10 border text-white">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register</h1>
		<p className="text-sm ">Sign up to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 " />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center ">Already have an account
				<Link to="/login"  className="hover:underline dark:text-violet-600">Log in</Link>.
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