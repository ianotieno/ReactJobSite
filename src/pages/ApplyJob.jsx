import React from 'react'
import { useState } from 'react';
import {useParams, useLoaderData, useNavigate} from 'react-router-dom'

import { toast } from 'react-toastify';

const ApplyJob = ({ applyJobs}) => {
    const job = useLoaderData();
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const navigate= useNavigate();
  const submitApplication= (e)=>{
    e.preventDefault();
   const newJob= {
    name,
    email,
    phone,
    resume,
    coverLetter,
    portfolio,
    
   }
   applyJobs(newJob);
   toast.success('Job Applied Successfully');
   return navigate('/jobs');
 }
  return (
    <>
 <section className="bg-indigo-50">
  <div className="container m-auto max-w-2xl py-24">
    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
      <form onSubmit={submitApplication}>
        <h2 className="text-3xl text-center font-semibold mb-6">Apply for the post {job.title}</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded w-full py-2 px-3"
            placeholder="Your full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded w-full py-2 px-3"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="border rounded w-full py-2 px-3"
            placeholder="Your phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="border rounded w-full py-2 px-3"
            required
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="coverLetter" className="block text-gray-700 font-bold mb-2">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            className="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="Write a cover letter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="portfolio" className="block text-gray-700 font-bold mb-2">
            Portfolio URL (optional)
          </label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            className="border rounded w-full py-2 px-3"
            placeholder="Your portfolio URL"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />
        </div>

        <div>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

    </>
  )
}

export default ApplyJob
