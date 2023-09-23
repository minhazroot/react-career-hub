import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [Jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(3)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="text-center">
            <h2 className="text-5xl">Featured Jobs {Jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
                {
                    Jobs?.slice(0, dataLength).map(job => <Job key={job.id} Job={job}></Job>)
                }

                <div className={dataLength === Jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(Jobs.length)} className="btn btn-accent">SHOW ALL </button>
                </div>

            </div>
        </div>
    );
};

export default FeaturedJobs;