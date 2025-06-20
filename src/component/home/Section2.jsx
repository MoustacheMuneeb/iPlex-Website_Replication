import React, { useEffect } from 'react'

const Section2 = () => {
  useEffect(() => {
    const element = document.getElementById('slideParagraph');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('opacity-100', 'translate-x-0');
          element.classList.remove('opacity-0', '-translate-x-10');
        } else {
          element.classList.remove('opacity-100', 'translate-x-0');
          element.classList.add('opacity-0', '-translate-x-10');
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  return (
    <section className='ps-6 py-20'>
      <p
        id="slideParagraph"
        className=" opacity-0 -translate-x-10 transition-all duration-700 ease-out !text-black font-normal text-[40px] text-start"
      >
        iPlex, a leading software solutions provider with unmatched expertise in web and mobile development.
        We stand out from our competitors by utilizing modern tech standards, from idea to development,
        according to the business's needs. Through our exceptional software development services,
        you will be at the top of the digital market.
      </p>
      <button className='underline font-semibold text-[30px] mt-6 cursor-pointer '>About iPlex</button>
    </section>
  )
}

export default Section2