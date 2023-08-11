import Ideator from '../assets/Ideator.png';
import GitCollabX from '../assets/GitCollabX.png';
import GoogleDocsClone from '../assets/GoogleDocsClone.png';
import QRCodeGenerator from '../assets/QRCodeGenerator.png';
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
    img: GoogleDocsClone,
    description: 'GoogleDocsClone - A simplified version of Google Docs.',
    link: 'https://github.com/your-username/google-docs-clone',
  },
  {
    img: QRCodeGenerator,
    description: 'QRCodeGenerator - Generate QR codes for URLs and text.',
    link: 'https://github.com/Vidip-Ghosh/QR-Code-Generator',
  },
];

const Projects = () => {
  return (
    <div className="bg-[url('./assets/BG1.png')]">
      <div className="container mx-auto px-4">
      <h1 className="text-center text-6xl my-8 text-white">Projects</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.img} alt={`Project ${idx + 1}`} className="mb-4 rounded-lg" />
              <p className="text-center text-white">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <AiFillGithub style={{fontSize:40,color:'white'}} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
