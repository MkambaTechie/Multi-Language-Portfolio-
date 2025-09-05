import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants/index';


const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`

export const Menu = () => {
  const [navbarblur, setNavbarblur] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavbarblur(true);
      } else {
        setNavbarblur(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hideMenu = () => {
    setIsMenuOpen(false);
  };

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
      <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>MT</h1>

      <div className='Hamburger' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <ul className={`NavbarLinks ${isMenuOpen ? 'showNavbar' : ''}`}>
        <li onClick={hideMenu}><NavLink className={isActive} to='/'>{t('home')}</NavLink></li>
        <li onClick={hideMenu}><NavLink className={isActive} to='/about'>{t('about')}</NavLink></li>
        <li onClick={hideMenu}><NavLink className={isActive} to='/Project'>{t('project')}</NavLink></li>
        <li onClick={hideMenu}><NavLink className={isActive} to='/Resume'>{t('resume')}</NavLink></li>

        <li>
          <select defaultValue={i18n.language} onChange={onChangeLang}>
            {
              LANGUAGES.map(({ code, label }) => (
                <option
                  key={code}
                  value={code}
                >{label}</option>
              ))
            }
          </select>
        </li>
      </ul>
    </nav>
  );
};