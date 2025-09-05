import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectBox from './ProjectBox';
import BlogApi from './images/bloga.png';
import BlogBackend from './images/blogla.png';
import Portfolio from './images/port.png';
import Book from './images/book.png';
import Social from './images/social.png';
import Cart from './images/cart.png';
import School from './images/school.png';



const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className='projectHeading'><b>{t('project')}</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={BlogApi} projectName="Blog Fetching API's Data" />
        <ProjectBox projectPhoto={Cart} projectName="Multi Vendors Market Place" />
        <ProjectBox projectPhoto={Portfolio} projectName="Portfolio Web using Next.js" />
        <ProjectBox projectPhoto={BlogBackend} projectName="Blog Web using Laravel" /> 
      </div>

    </div>
  )
}

export default Projects