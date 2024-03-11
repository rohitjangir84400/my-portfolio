import React from 'react';

export default function Skills() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="skills">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        Skills
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill ,index) => {
          return (
            <div className="flex space-x-2 items-center" key={index}>
              {skill.icon && <div className="text-2xl">{skill.icon}</div>}
              {skill.img && <img src={skill.img} className="h-6 w-6" alt=""></img>}
              <div className=" text-gray-500">{skill.skill}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const skills = [
  {
    icon: <i className="devicon-nodejs-plain colored"></i>,
    skill: 'Node JS',
  },
  {
    icon: <i className="devicon-express-original colored"></i>,
    skill: 'Express JS',
  },
  {
    icon: <i className="devicon-react-original colored"></i>,
    skill: 'React',
  },
  {
    icon: <i className="devicon-redux-original colored"></i>,
    skill: 'Redux',
  },
  {
    icon: <i className="devicon-bootstrap-plain colored"></i>,
    skill: 'Bootstrap',
  },
  {
    icon: <i className="devicon-materialui-plain colored"></i>,
    skill: 'Material UI',
  },
  {
    icon: <i className="devicon-tailwindcss-plain colored"></i>,
    skill: 'Tailwind CSS',
  },
  {
    icon: <i className="devicon-css3-plain colored"></i>,
    skill: 'CSS',
  },
  {
    icon: <i className="devicon-html5-plain colored"></i>,
    skill: 'HTML',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    skill: 'JavaScript',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    skill: 'MongoDB',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    skill: 'MySQL',
  },
  {
    icon: <i className="devicon-git-plain colored"></i>,
    skill: 'git',
  },
];
