import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">¡Welcome to my portfolio!</h3>
        <p data-aos="fade-up">
          Hello World! I am Nahuel Rodríguez Maury. I am a Full-Stack Web Developer and a Tester QA Manual based in Argentina. I can make a modern, mobile responsive, highly performant website. Also, I can test any type of application.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header