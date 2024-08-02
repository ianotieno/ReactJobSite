/*import React from 'react'
import JobListings from '../components/JobListings'
const JobsPage = () => {
  return (
    <section className='  bg-blue-50 px-4 py-6'>
       <div className="grid grid-cols-4">
     <JobListings />
     </div>
    </section>
  )
}

export default JobsPage*/
import React from 'react';
import { useState, useEffect } from 'react';
import JobListing from '../components/JobListing';
import Spinner from '../components/Spinner';

const Jobpage = ({ isHome = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl= isHome ? 'api/jobs?_limit=3':'api/jobs'
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="w-full m-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className=" grid gap-4 ">
          {loading ? (<Spinner loading={loading}/>):(
            <div className=" grid p-2 grid-cols-3 md:grid-cols-3 lg:grid--3 gap-6">
             {jobs.map((job) => ( 
            <JobListing key={job.id} job={job} className="flex flex-col"/>
          ))}
            </div>
          )
          }
         
        </div>
      </div>
    </section>
  );
};

export default Jobpage;
