
import Banar from '../../component/Banar/Banar';
import FeaturedJobs from '../../component/FeaturedJobs/FeaturedJobs';
import JobCategory from '../../component/JobCategory/JobCategory';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>

        </div>
    );
};

export default Home;