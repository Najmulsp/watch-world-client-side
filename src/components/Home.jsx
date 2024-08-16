
import AboutUs from './AboutUs';
import AllProducts from './AllProducts';
import Banner from './Banner';
import Category from './Category';
import Partners from './Partners';

const Home = () => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-amber-100 to-sky-100'>
            <Banner></Banner>
            <Category></Category>
            <AllProducts></AllProducts>
            <AboutUs></AboutUs>
            <Partners></Partners>
        </div>
    );
};

export default Home;

