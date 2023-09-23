import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { IoLocationOutline, IoLogoBitcoin } from "react-icons/io5";
const Job = ({ Job }) => {
    const { id, logo, job_title, company_name, job_type, salary, location, remote_or_onsite } = Job || {};
    console.log(Job);
    return (
        <div>
            <div className="border border-sky-500 p-5 bg-gray-200 flex flex-col gap-y-3 rounded-xl">
                <div>
                    <img src={logo} alt="" />
                </div>
                <h3 className="text-3xl font-bold text-left">{job_title}</h3>
                <div className="text-left">
                    <p>{company_name}</p>
                    <div className="flex gap-x-5">
                        <button className="text-[#9873FF] px-5 py-3 border-solid border-2 border-sky-500  font-extrabold  rounded-lg ">{remote_or_onsite}</button>
                        <button className="text-[#9873FF] px-5 py-3 border-solid border-2 border-sky-500  font-extrabold  rounded-lg ">{job_type}</button>
                    </div>
                </div>
                <div className="flex gap-x-5">
                    <p className="flex items-center font-semibold "><IoLocationOutline ></IoLocationOutline> {location}</p>
                    <p className="flex items-center"> <IoLogoBitcoin></IoLogoBitcoin> Salary: {salary}</p>
                </div>
                <Link to={`/Job/${id}`}><button className="btn btn-outline btn-secondary">View Details</button></Link>
            </div>

        </div>
    );
};
Job.propTypes = {
    Job: PropTypes.object
};
export default Job;