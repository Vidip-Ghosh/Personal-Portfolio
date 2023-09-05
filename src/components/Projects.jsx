import Ideator from '../assets/Ideator.png';
import GitCollabX from '../assets/GitCollabX.png';
import FloodGuardia from '../assets/FloodGuardia.png';
import QRCodeGenerator from '../assets/QRCodeGenerator.png';
import PersonalPortfolio from '../assets/PersonalPortfolio.png'
import { AiFillGithub } from 'react-icons/ai';

const projectList = [
  {
    img: Ideator,
    description: 'Ideator - A platform for sharing and brainstorming ideas.',
    link: 'https://github.com/Vidip-Ghosh/Ideator',
  },
  {
    img: GitCollabX,
    description: 'GitCollabX - Collaborate with other developers on Git projects.',
    link: 'https://github.com/Vidip-Ghosh/GitCollabX',
  },
  {
    img: FloodGuardia,
    description: 'Flood Guardia - Guarding Communities, Defending Against Floods',
    link: 'https://github.com/PekaVengers/FloodGuardia',
  },
  {
    img: QRCodeGenerator,
    description: 'QRCodeGenerator - Generate QR codes for URLs and text.',
    link: 'https://github.com/Vidip-Ghosh/QR-Code-Generator',
  },
  {
    img: PersonalPortfolio,
    description: 'Personal Portfolio',
    link: 'https://github.com/Vidip-Ghosh/Personal-Portfolio',
  }
];

const Projects = () => {
  return (
    // 4 column project --> More Projects button at end
    <div className="bg-[url('./assets/BG1.png')]">
      <div className="container mx-auto px-4">
      <h1 className="text-center text-6xl text-white">Projects</h1>
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          {projectList.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.img} alt={`Project ${idx + 1}`} className="mb-4 rounded-md" />
              <p className="text-center text-white font-bold text-lg">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <AiFillGithub style={{fontSize:40,color:'white'}} />
              </a>
            </div>
          ))}
        </div>
        </div>
        <div className='flex justify-center'>
          <a href='https://github.com/Vidip-Ghosh?page=1&tab=repositories'><button type="button" className="btn text-white bg-purple-700 border-2 px-6 py-3 hover:bg-transparent">SHOW MORE</button></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
