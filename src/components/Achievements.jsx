import GSSOC_Certificate from '../assets/GSSOC_Certificate.png';
import MLHGitCollabX from '../assets/MLHGitCollabX.png';
import HacktoberfestBadges from '../assets/HacktoberfestBadges.png';
import GCloudCertificate from '../assets/GCloudCertificate.png';
import LinkedInSkillBadge from '../assets/LinkedInSkillBadge.png';

const achievementsList=[
    {
        img:GSSOC_Certificate,
        heading: "GSSOC'23 Contributor (Top-100)",
    },
    {
        img:MLHGitCollabX,
        heading: "MLH Hackathon's React vs. Angular HackBattle",
    },
    {
        img: HacktoberfestBadges,
        heading: "Hacktoberfest 2022",
    },
    {
      img: LinkedInSkillBadge,
      heading: "LinkedIn Skill Badge"
    },
    {
        img:GCloudCertificate,
        heading: "30 days of Google Cloud Program",
    },
    {
      img:GCloudCertificate,
      heading: "Hack This Fall 2024",
    }
]

const Achievements = () => {
  return (
    <div className="bg-[url('./assets/BG1.png')]">
      <h1 className="text-center text-6xl text-white">Achievements</h1>
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
        <div className="grid md:grid-cols-3 sm:grid-cols-1">
          {achievementsList.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center py-2">
              <img src={item.img} alt={`Project ${idx + 1}`} className="mb-4 rounded-md h-64 w-80" />
              <h3 className="text-center text-white font-bold text-lg">{item.heading}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements
