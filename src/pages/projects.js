import React from 'react';
import ESW from '../assets/p3.png';
import SA from '../assets/p2.png';
import SMT from '../assets/p4.png';
import FSW from '../assets/P5.png';
import EM from '../assets/p1.png';
import web from '../assets/p6.png';
import modal from '../assets/p7.png';
import initialsteps from '../assets/p8.png'

export default function Projects() {
  return (
    <div className=" bg-slate-50 relative overflow-hidden" id="projects">
      <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
        <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
          Projects
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {projects.map((proj , index) => {
            return (
              <div className="p-4 shadow-md space-y-7 bg-black" key={index}>
                <div className="h-32 overflow-hidden border-b relative">
                  <img alt="" src={proj.img} className="w-full absolute left-0 my-auto "></img>
                </div>
                <div className="text-2xl text-cyan-500 h-10">{proj.title}</div>
                <div className="h-[100px] overflow-y-auto text-gray-400 font-light text-xs">
                  {proj.details}
                </div>
                <div className="flex justify-end space-x-4 items-center opacity-50">
                  {proj.links.map((link , index) => {
                    return (
                      <a
                        href={link.link}
                        target={'_blank'}
                        rel="noreferrer"
                        key={index}
                        className="h-5 cursor-pointer text-2xl text-gray-500 flex items-center"
                      >
                        {link.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Enjoymovi Web app',
    details:
      'enjoymovi is a movie web app build on Next.Js and TMDB API is a web application that allow user to get movie and tv shows details.',
    img: EM,
    links: [
      {
        icon: 'Live',
        link: 'https://enjoymovi.vercel.app/',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/rohitjangir84400/enjoymovi',
      },
    ],
  },
  {
    title: 'Ecommerce Shopping Website',
    details: "Built a Website From Scratch on MERN Stack",
    img: ESW,
    links: [
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/rohitjangir84400/ecommerce',
      },
    ],
  },
  {
    title: 'Social Media',
    details:'Twitter Clone Based on Mern Stack',
    img: SMT,
    links: [
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/rohitjangir84400/socialmedia',
      },
    ],
  },
  {
    title: 'Sales App',
    img: SA,
    details: "Sales App Based on MERN Stack",
    links: [
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/rohitjangir84400/salesapp',
      },
    ],
  },
  {
    title: 'Front End Project',
    details: 'Front End Project Based on HTML , CSS , JAVASCRIPT',
    img: FSW,
    links: [
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/rohitjangir84400/front-end-project',
      },
    ],
  },
  {
    title: 'Web page design',
    details:
      'Responsive Web page design using react and tailwind css with fade in animation when component comes in the view port.',
    img: web,
    links: [
      {
        icon: 'Live',
        link: 'https://aeonaxy-web-page-design.netlify.app',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/rohitjangir84400/aeonaxy-project',
      },
    ],
  },
  {
    title: 'Modal desing front-end',
    details:
      'Responsive meeting schedule modal using react and tailwind css to open modal click on get  a demo.',
    img: modal,
    links: [
      {
        icon: 'Live',
        link: 'https://aneonaxy-meeting-schedule-modal.netlify.app',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: ' https://github.com/rohitjangir84400/aeonaxy-meeting-schedule',
      },
    ],
  },
  {
    title: 'Web page design with initial stepper',
    details:
      'Responsive web page design with initial steps to move through these using react and tailwind css to open modal click on get  a demo.',
    img: initialsteps,
    links: [
      {
        icon: 'Live',
        link: 'https://aeonaxy-web-development-project.netlify.app',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/rohitjangir84400/aeonaxy-web-development-project',
      },
    ],
  },
];
