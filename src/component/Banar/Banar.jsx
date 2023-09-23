

const Banar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center w-[80%] mx-auto">
            <div className="flex flex-col gap-y-10">
                <h1 className="text-6xl font-extrabold">One Step Closer To Your <span className="text-red-600">Dream Job</span></h1>
                <p> Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            <div>
                <img src={`https://i.ibb.co/5T1TtZc/user.png`} alt="" />
            </div>

        </div>
    );
};

export default Banar;