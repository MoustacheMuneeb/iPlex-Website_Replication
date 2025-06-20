import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.project-item');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-10');
          } else {
            el.classList.remove('opacity-100', 'translate-y-0');
            el.classList.add('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section ref={sectionRef}>
      <h2 className="mb-11 ps-6 text-[45px] container">
        Take a look at our projects
      </h2>
      <div className="ps-6 columns-2 gap-6 pr-6">
        {[
          {
            img: 'clinuvel.png',
            title: 'Clinuvel',
            desc: 'Translate scientific concepts into commercial products',
          },
          {
            img: 'appricotlaw.png',
            title: 'AppricotLaw',
            desc: 'Digital marketing services provider to law firms',
          },
          {
            img: 'fund.png',
            title: 'Funds Fast Online',
            desc: 'All your customers financial needs in one place',
          },
          {
            img: 'gary.png',
            title: '2023 . RedLetter',
            desc: 'Connection between clients and their customers',
          },
        ].map((project, index) => (
          <div
            key={index}
            className="project-item opacity-0 translate-y-10 transition-all duration-700 ease-out mb-10 cursor-pointer"
          >
            <img
              src={project.img}
              alt={`Project${index + 1}`}
              className="w-[730.4px] h-[547.56px] object-cover mb-4 rounded-md"
            />
            <ul>
              <li className="text-[14px] font-semibold">{project.title}</li>
              <p className="font-semibold text-[28px]">{project.desc}</p>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
