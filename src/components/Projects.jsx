import Ideator from '../assets/Ideator.png';
import GitCollabX from '../assets/GitCollabX.png';
import FloodGuardia from '../assets/FloodGuardia.png';
import PurrfectPal from '../assets/PurrfectPal.png';
import PersonalPortfolio from '../assets/PersonalPortfolio.png'
import PlanetCare from '../assets/PlanetCare.png'
import { AiFillGithub } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

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
    link: 'https://github.com/Vidip-Ghosh/FloodGuardia',
  },
  {
    img: PurrfectPal,
    description: 'PurrfectPal - An app with web duo which bridges the gap between the pet owners and the people who can temporary adopt their pet.',
    link: 'https://github.com/Vidip-Ghosh/PurrfectPal'
  },
  {
    img: PersonalPortfolio,
    description: 'Personal Portfolio',
    link: 'https://github.com/Vidip-Ghosh/Personal-Portfolio',
  },
  {
    img: PlanetCare,
    description: "Planet Care - Prioritizing sustainability through responsible environmental stewardship.",
    link: 'https://github.com/Vidip-Ghosh/HackOdisha'
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
              <img src={item.img} alt={`Project ${idx + 1}`} className="mb-4 rounded-md h-56 w-96" />
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
