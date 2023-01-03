import Card from '../../components/Card'
import data from './data'
import './services.css'
import FullStackCertificate from '../../assets/certificate-fullstack.jpeg'
import TestingCertificate from '../../assets/certificate-testing.png'
import WebDesignCertificate from '../../assets/certificate-webdesign.png'
import JavaScriptCertificate from '../../assets/certificate-javascript.png'
import BackendCertificate from '../../assets/certificate-backend.png'
import ElectronicCertificate from '../../assets/certificate-electronic.png'


const Services = () => {
  return (
    <section id="certificates">
      <h2>My Certificates</h2>
      <p></p>
      <div className="container services__container" data-aos="fade-up">
        {/* {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))
        } */}
        <a href="https://drive.google.com/file/d/1zUA2WX3rHJPsnal7ECSu5qCzlcf92MLq/view?usp=sharing" target="_blank"><img src={FullStackCertificate} alt="Full-Stack Certificate" /></a>
        <a href="https://drive.google.com/file/d/1nAA3S3MV9-muSzM7f_qUM0VkR4Fa10QN/view?usp=sharing" target="_blank"><img src={TestingCertificate} alt="Testing Certificate" /></a>
        <a href="https://www.freecodecamp.org/certification/nahuelrmaury/responsive-web-design" target="_blank"><img src={WebDesignCertificate} alt="Testing Certificate" /></a>
        <a href="https://www.freecodecamp.org/certification/nahuelrmaury/javascript-algorithms-and-data-structures" target="_blank"><img src={JavaScriptCertificate} alt="Testing Certificate" /></a>
        <a href="https://www.freecodecamp.org/certification/nahuelrmaury/back-end-development-and-apis" target="_blank"><img src={BackendCertificate} alt="Testing Certificate" /></a>
        <a href="https://drive.google.com/file/d/1LvvgI53mfxZaTROy6IHs4K0pQaQq7muM/view?usp=sharing" target="_blank"><img src={ElectronicCertificate} alt="Electronic Certificate" /></a>
      </div>
    </section>
  )
}

export default Services