import React from 'react'; 
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiDaisyui, SiExpress, SiFlutter, SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiTailwindcss, SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'Laravel': <SiLaravel/>,
        NextJs: <SiNextdotjs/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Tail : <SiTailwindcss/>,
        Mysql : <SiMysql/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Flutter : <SiFlutter/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Daisyui : <SiDaisyui/>,
        Python : <SiPython/>,
        
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
