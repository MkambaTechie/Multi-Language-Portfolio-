import React from 'react';
import Skills from './Skills.jsx';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from './LottieFiles/coder.json';
import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation()
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >{t('getto')} <b>{t('know')}</b> {t('me')}</h1>
          <p>
            {t('Hi')} <b>Athuman Mkamba</b> {t('andIfrom')} Dodoma, Tanzania.
            {t('Im')} <b>{t('fulltack')}</b><br/><br/>
            {t('Ilove')}<br/><br/>
            {t('Imm')} <b>{t('open')}</b> {t('collaborations')} 
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>{t('Skillset')}</h1>
      <div className='skills'>
        
        <Skills skill='Laravel' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Tail' />
        <Skills skill='Mysql' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='NextJs' />
        <Skills skill='Flutter' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Python' />
        <Skills skill='Daisyui' /> 
        
      </div>
    </>
  )
}

export default About