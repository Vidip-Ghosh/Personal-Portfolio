import {AiFillLinkedin,AiFillGithub,AiOutlineMail} from 'react-icons/ai';
import {SiDevpost} from 'react-icons/si'
const Contact = () => {
  return (
    <div className="bg-[url('./assets/BG1.png')]">
      <h1 className="text-center text-6xl text-white p-8">Contact</h1>
      <div className="links flex justify-center space-x-8 text-white text-[40px]">
        <a href="https://www.linkedin.com/in/vidip-ghosh-9973b7213/"><AiFillLinkedin/></a>
        <a href="https://github.com/Vidip-Ghosh"><AiFillGithub/></a>
        <a href="mailto:vidip2001@gmail.com"><AiOutlineMail/></a>
        <a href="https://devpost.com/ghoshvidip26"><SiDevpost/></a>
      </div>
      <div className="flex justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14039.308357571386!2d77.34392775!3d28.39429005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdce802de1765%3A0xfffc92e94b7d014c!2sBPTP%20Park%20Grandeura!5e0!3m2!1sen!2sin!4v1691764134453!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
