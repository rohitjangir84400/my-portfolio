import React from 'react';
import CertificateData from '../assets/certificateData.json';

export default function Certifications() {
  return (
    <div className=" bg-black/90 relative overflow-hidden text-gray-400" id="blogs">
      <div className=" max-w-6xl mx-auto p-5 py-20">
        <div className="mb-16">
          <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4">
           Achievements & Certifications
          </div>
          <div>Check out my Achievements & Certifications.</div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {CertificateData.map((data , index) => (
            <div key={index} className="border-l px-2 border-gray-400 transition duration-30 group hover:text-white hover:bg-gray-600/10 ease-in-out text-xs p-2">
              <div className="font-bold text-base text-green-500 group-hover:text-green-600">
                {data.title}
              </div>
              <div className="font-bold text-base text-gray-300 group-hover:text-gray-600">
                {data.organisation}
              </div>
              <div className="font-bold text-gray-200 mt-2">
                <div className="space-x-2">
                  {data.links.map((link , index) =>
                      <a href={link.url} key={index} target="_blank" rel="noreferrer">
                        {link.title}
                      </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
