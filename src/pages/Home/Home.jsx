import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const jobsPromise =fetch('https://carrer-code-server.vercel.app/jobs').then(res=>res.json())
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
        </div>
    );
};

export default Home;