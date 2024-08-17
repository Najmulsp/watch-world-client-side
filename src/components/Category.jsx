import category1 from '../../public/category/category1.jpg';
import category2 from '../../public/category/category2.jpg';
import category3 from '../../public/category/category3.jpg';
import category4 from '../../public/category/category4.jpg';

const Category = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 bg-gradient-to-r from-amber-100 to-sky-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">New Arival</h2>
			<p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col ">
            <div className='w-52 h-52'>
                    <img alt="" className="object-cover rounded-full w-full h-full dark:bg-gray-500" src={category1} />
                </div>
			</article>
			<article className="flex flex-col ">
            <div className='w-52 h-52'>
                    <img alt="" className="object-cover border-collapse rounded-full w-full h-full dark:bg-gray-500" src={category2} />
                </div>
				
			</article>
			<article className="flex flex-col ">
                <div className='w-52 h-52'>
                    <img alt="" className="object-cover rounded-full w-full h-full dark:bg-gray-500" src={category3} />
                </div>

			</article>
			<article className="flex flex-col">
            <div className='w-52 h-52'>
                    <img alt="" className="object-cover rounded-full w-full h-full dark:bg-gray-500" src={category4} />
                </div>
				
			</article>
		</div>
	</div>
</section>
        </div>
    );
};

export default Category;