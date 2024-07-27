import React from 'react';
import { useState,useEffect } from 'react';
import JobListing from './JobListing';

const JobListings = ({isHome= false}) => {
 const [jobs, setJobs]= useState([]);

  return (
    <section className="bg-blue-50 px-4 py-10 sm:flex-col lg:flex-col">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="flex   gap-4 p-4 mb-1rounded-lg ">
          {jobListings.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
