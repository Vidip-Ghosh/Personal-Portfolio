import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import '../App.css'
import { useState } from 'react'

const Header = () => {
    const [toggle,setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
    <header className='flex justify-between px-5 py-3 bg-primary text-white'>
      <a href="/" className='logo text-3xl font-bold text-accent py-3'>Vidip Ghosh</a>

      {/* Desktop Navbar */}
      <nav className='hidden md:block'>
        <ul className="flex">
            <li><a href="/#">About</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#blog">Blog</a></li>
            <li><a href="/#contact">Contact</a></li>
        </ul>

        {/* Mobile Navbar */}
      </nav>

      {/* Mobile Navbar */}    
      <nav className={
        !toggle ? 'mobile-nav left-[-100%]'
                : 'mobile-nav left-0'
      }
      >
        <ul className="flex flex-col border-2">
            <li><a href="/#">About</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#blog">Blog</a></li>
            <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Toggle button */}
      <button className='md:hidden block' onClick={handleToggle}>
        {
            !toggle ? <AiOutlineMenu size={40}/> : <AiOutlineClose size={40}/>
        }
      </button>
    </header>
  )
}

export default Header
