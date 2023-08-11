import avatar from '../assets/Vidip.jpg';
import leetcode from '../assets/Leetcode.jpg';
import GFG from '../assets/GFG.jpg';
import CodingNinjas from '../assets/CodingNinjas.jpg';

const skills = [
  { skill: "HTML", image: "" },
  { skill: "CSS" },
  { skill: "JS" },
  { skill: "ReactJS", image: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp" },
  { skill: "NodeJS" },
  { skill: "ExpressJS" },
  { skill: "MongoDB" },
  { skill: "Typescript" },
  { skill: "Git & GitHub" },
  { skill: "NextJS" },
  { skill: "Firebase" },
  { skill: "MySQL" },
  { skill: "Python" },
];

const About = () => {
  return (
    <div className=" bg-[url('./assets/BG1.png')] text-white">
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-center text-6xl">About Me</h1>
      {/* Intro */}
      <div className="text-center flex flex-col items-center my-8">
        <img className="h-48 w-48 rounded-full mb-4" src={avatar} alt="" />
        <p className="text-lg">
          Hi, I am Vidip Ghosh, a MERN Stack Developer and enthusiastic about learning new technologies. Currently, pursuing B.Tech in Computer Engineering from Jamia Millia Islamia, New Delhi, 🇮🇳India.
        </p>
      </div>
      {/* Coding Profiles */}
      <div className="flex flex-col items-center my-8">
        <h3 className="text-3xl">Coding Profiles</h3>
        <div className="coding-profile grid grid-cols-3 gap-4 my-4">
          <a href="https://leetcode.com/ghoshvidip26/" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} alt="Leetcode Profile" className="rounded-lg w-full" />
          </a>
          <a href="https://auth.geeksforgeeks.org/user/ghoshvidip26/" target="_blank" rel="noopener noreferrer">
            <img src={GFG} alt="GeeksforGeeks Profile" className="rounded-lg w-full" />
          </a>
          <a href="https://www.codingninjas.com/studio/profile/VIDIP_GHOSH" target="_blank" rel="noopener noreferrer">
            <img src={CodingNinjas} alt="Coding Ninjas Profile" className="rounded-lg w-full" />
          </a>
        </div>
      </div>
      {/* Tech Skills */}
      <div className="flex flex-col items-center my-8">
        <h3 className="text-3xl">Tech Stacks</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4">
          {skills.map((item, idx) => (
            <div key={idx} className="bg-gray-200 px-4 py-2 text-gray-500 font-semibold rounded-lg text-center">
              {item.skill}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
