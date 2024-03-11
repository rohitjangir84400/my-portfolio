import React from 'react';

export default function Experience() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        Experience
      </div>
      {experiences.map((exp , index) => {
        return (
          <div className="w-full shadow-md px-4 py-8 rounded-lg mb-10" key={index}>
            <div className=" grid md:grid-cols-4 gap-4 md:order-2">
              <div
                className="w-full h-40 flex items-center justify-center my-auto hover:scale-105 transform transition ease-in cursor-pointer"
                onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
              >
                <img
                  className="max-h-full max-w-full rounded-md"
                  src={
                    exp.img ||
                    'https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500">{exp.company}</div>
                <div className="md:flex justify-between">
                  <div className="text-xl text-slate-500 ">{exp.position}</div>
                  <div className=" text-slate-400">{exp.date}</div>
                </div>
                <div className=" text-gray-600 font-light text-sm px-4">
                  <ul className="list-disc">
                    {exp.details.map((detail , index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Front End Developer Intern',
    company: 'PLG Works',
    details: [
      'Developed and maintained responsive web pages using HTML,CSS.',
      'Worked with front-end frameworks such as React.Js and Nex.Js to build user interfaces and improve website performance.',
      'Conducted user testing and implemented user feedback to improve website user experience.',
      'Made changes to the website based on the feedback received.',
      'Worked with css frameworks such as Bootstrap and Tailwind to style the components.'

    ],
    date: 'Jan 2022 - Jun 2022',
    img: 'https://media.licdn.com/dms/image/C4D0BAQGgDiCgNGC3uw/company-logo_200_200/0/1651662630494/plgworks_logo?e=2147483647&v=beta&t=-AVfe1xMa5xQDPYI16ApyGRpo8Zqx--vE8zXyfjJKD4',
    companyUrl: 'https://plgworks.com',
  },
];
