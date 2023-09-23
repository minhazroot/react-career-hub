import { useLoaderData, useParams } from "react-router-dom";


const JobDetels = () => {
    const details = useLoaderData();
    const { JobId } = useParams;
    const IdInt = parseInt(JobId)
    const job = details.find(job => job.JobId === IdInt)

    console.log(job);
    // const { job_title } = details

    return (
        <div>
            JobDetels
            {/* <h1>{id}</h1> */}

        </div>
    );
};

export default JobDetels;