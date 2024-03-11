import React from 'react';

export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="basis-2/3 space-y-4">
          <span className="text-gray-500 text-xl">Hi, I am </span>
          <div className="text-cyan-500 text-4xl font-bold">ROHIT JANGIR</div>
          <div className="text-xl text-gray-500 font-semibold">Passionate Coder</div>
          <div className="font-light text-gray-400 text-justify">
            Self motivated and hardworking and ability to work collaboratively in a team enviroment. Seeking a
            challenging entry-level position where I can apply my skills and grow as a professional.
          </div>
          <div className="font-light text-gray-400 text-justify">
            - Education : B-Tech ( Computer Science )
          </div>
          <div className="font-light text-gray-400 text-justify">
            - Contact No : +91-8440024470
          </div>
          <div className="font-light text-gray-400 text-justify">
            - Email : rohitjangir9339@gmail.com
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {social.map((link , index) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                key={index}
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })}
        </div>
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-slate-200"
          href={'https://drive.google.com/file/d/1Z-8Vc3p9Egt02qJiguFf4_0hRs9NyaNm/view?usp=drive_link'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: '#',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/rohitjangir84400',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
    link: 'https://www.instagram.com/rohitjangir19',
  },
];
