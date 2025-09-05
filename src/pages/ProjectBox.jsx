import React from 'react';
import { useTranslation } from 'react-i18next';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const { t } = useTranslation();

  // The 'desc' object now only stores links and other non-translated data.
  const desc = {
    TindogGithub: "https://github.com/DevanshSahni/tindog",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    RogFreeGithub: "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite: "https://devanshsahni.github.io/Rog-Free/",

    NewsletterGithub: "",
    NewsletterWebsite: "https://newsletter-signup-teal.vercel.app/",
    
    WigglesGithub: "https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite: "https://wiggles.vercel.app/",
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'> 
      <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {/* The translation key is built dynamically */}
        <p>{t(`projDesc.${projectName}Desc`)}</p>
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'>
            {/* <FaGithub/> */}
            {t('githubButton')}
          </button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'>
            {/* <CgFileDocument/> */}
            {t('demoButton')}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;