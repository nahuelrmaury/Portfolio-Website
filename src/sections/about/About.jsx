import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
    return (
        <section id="about" className='height-adjust' data-aos="fade-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About Image" className='about__img' />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    {/* <p>
                        You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best.
                    </p> */}
                    <p>
                        My name is Nahuel Rodríguez Maury from Buenos Aires, Argentina. I'm a Full-Stack Web Developer, a Tester QA Manual, an Electronic Technician and an Engineering Student. I am looking for a full-time position to develop my knowledge and grow in the IT world. I have many skills to contribute including all of the above and also, all the knowledge acquired in my training as an electronic technician and in my current career as an engineer. I pride myself on being detail-oriented, analytical, and driven.
                    </p>
                    <div className='adjust-center'><a href={CV} download className='btn primary'>Download CV <HiDownload /></a></div>

                </div>
            </div>
        </section>
    )
}

export default About