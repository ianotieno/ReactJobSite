import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
const HomeCards = () => {
  return (
    <section className="py-2">
      <div className="container-xl lg:container hw  m-auto md:grid-cols-3">
        <div className="flex  justify-between p-1  rounded-lg ">
          <Cards>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>
          </Cards>
          <Cards bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </Link>
          </Cards>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
