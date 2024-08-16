import aboutImg from "../../public/about/watch_about2.png"
const AboutUs = () => {
    return (
        <div>
            <section className="p-6 bg-gradient-to-r from-sky-100 to-amber-100 dark:text-gray-800">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full flex flex-col justify-center items-center px-6 py-16  sm:px-12 md:px-16 xl:col-span-2 bg-amber-50">
			
			<h1 className="text-5xl font-extrabold dark:text-gray-900">About Us</h1>
			<p className="my-8">
            Plentiful designs for shop and product detail pages let your items impress visitors in stylish presentations.
			</p>
			<div className="flex border overflow-hidden p-2  dark:bg-gray-50 dark:text-gray-800">
			<div className="flex border  items-center justify-center px-4 dark:bg-violet-600 dark:text-gray-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-8">
					<path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
					<path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
				</svg>
			</div>
			<div className="flex w-72 items-center justify-between flex-1 p-3">
				<p className="text-2xl font-semibold">7 500+ </p>
				<p> Customers</p>
			</div>
		</div>
		<div className="flex border p-2 overflow-hidden  dark:bg-gray-50 dark:text-gray-800 mt-6">
			<div className="flex items-center justify-center px-4 dark:bg-violet-600 dark:text-gray-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
					<polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
					<path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
				</svg>
			</div>
			<div className="flex w-72 items-center justify-between flex-1 p-3">
				<p className="text-2xl font-semibold">14</p>
				<p>Awards</p>
			</div>
		</div>
		</div>
		<img src={aboutImg} alt="" className="object-cover w-full xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
        </div>
    );
};

export default AboutUs;