import React, { useEffect, useState } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={`z-50 fixed container flex justify-between items-center transition-all ease-in-out duration-300 ${scrolled ? 'bg-black py-6 px-5' : 'bg-transparent py-9 px-5'
        }`}
    >
      <img src="logo.png" className=' ' alt="" />
      <div className='px-5 flex gap-2 items-center'>
        <img src="menu-img.png" alt="" />
        <p className="cursor-pointer relative inline-block !text-white transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-black hover:to-amber-400 hover:bg-clip-text">
          MENU
        </p>
      </div>
    </div>
  )
}

export default Header