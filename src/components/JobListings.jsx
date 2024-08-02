import React from 'react';
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false}) => {
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
      <div className="w-full  m-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="flex flex-row-1 items-stretch md:flex-row-3 lg:flex--3 gap-6">
          {loading ? (<Spinner loading={loading}/>):(
            <>
             {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
            </>
          )
          }
         
        </div>
      </div>
    </section>
  );
};

export default JobListings;
