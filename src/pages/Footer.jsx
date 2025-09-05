import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiInstagram, SiX } from "react-icons/si"; 

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <h4>{t('Developed by')} Athuman Mkamba</h4>
      <h4>{t('Copyright')} &copy; 2025 MT</h4>
      <div className='footerLinks'>
        <a href="https://github.com/MkambaTechie" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/athuman-mkamba-097565198" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:athamkamba@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/ymyl_athamiddii/" target="_blank"><SiInstagram/></a>
         <a href="https://twitter.com/lambimbodiolo" target="_blank"><SiX/></a>
      </div>
    </footer>
  )
}

export default Footer