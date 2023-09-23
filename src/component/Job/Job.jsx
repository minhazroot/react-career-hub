import { Link } from "react-router-dom";

const Job = ({ Job }) => {
    const { logo, job_title, company_name, job_type, salary, location } = Job;
    console.log(Job);
    return (
        <div>
            <div className="border border-sky-500 p-5 bg-gray-200 flex flex-col gap-y-3">
                <div>
                    <img src={logo} alt="" />
                </div>
                <h3 className="text-3xl font-bold text-left">{job_title}</h3>
                <div className="text-left">
                    <p>{company_name}</p>
                    <p>Job Type: {job_type}</p>
                </div>
                <div className="flex gap-x-5">
                    <p>{location}</p>
                    <p> Salary: {salary}</p>
                </div>
                <Link><button className="btn btn-outline btn-secondary">View Details</button></Link>
            </div>

        </div>
    );
};

export default Job;