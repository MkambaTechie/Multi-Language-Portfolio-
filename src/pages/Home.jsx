import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "./LottieFiles/coder.json";
// import NightSky from "./LottieFiles/night-sky.json";
// import Coder from "./LottieFiles/coder.json";
import Typed from "./Typed.jsx";
import Tilt from 'react-parallax-tilt';
import Avatar from './images/Avatar.png'; 
import { useTranslation } from 'react-i18next';

export const Home = () => {

    const { t } = useTranslation()


  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>{t('greetings')}</h1>
          <h1>{t('home.user')} <b>ATHUMAN MKAMBA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>{t('brief')} <b>{t('intro')}</b></h1>
          <p>
            {t('p1')}<br /><br />
            {t('fluent')} <b>Laravel</b> {t('knowbit')} <b>Flutter</b> {t('workon')} <b>Laravel</b>, <b>Next.js</b>, <b>React</b>, <b>Tailwinds</b>, <b>Bootstrap</b>, <b>Livewire</b>, <b>Filament</b> & <b>Flutter</b> {t('stack')}. 
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home