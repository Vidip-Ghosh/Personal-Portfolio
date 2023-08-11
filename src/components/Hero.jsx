import img from '../assets/hero_section.gif'
import '../App.css'
import pdf from '../assets/Resume.pdf'

const Hero = () => {
  return (
    <section className='bg-primary py-24 text-white'>
        <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
            <div className="hero-info">
                <h1 className='lg:text-6xl md:text-4xl sm:text-4xl'>Hi, <br /> I am <span className='text-accent'>V</span>idip, <br />Enthusiastic of learning new technologies</h1>
                <p>I am MERN Developer and currently learning flutter</p>
                <a href={pdf}> <button type="button" className="btn text-white bg-purple-700 border-2 px-6 py-3 hover:bg-transparent">See My Resume</button></a>
            </div>
            <div className="hero-img flex sm:justify-center">
                <img src={img} alt="coding....." className='w-[80%]'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
