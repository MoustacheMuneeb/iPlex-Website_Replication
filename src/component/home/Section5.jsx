import React, { useEffect, useRef } from 'react';

const Section5 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const elements = sectionRef.current.querySelectorAll('.pop-word');
        if (entry.isIntersecting) {
          elements.forEach((el, index) => {
            el.classList.remove('opacity-0', 'scale-90');
            el.classList.add('opacity-100', 'scale-100');
            el.style.transitionDelay = `${index * 0.2}s`;
          });
        } else {
          elements.forEach((el) => {
            el.classList.remove('opacity-100', 'scale-100');
            el.classList.add('opacity-0', 'scale-90');
            el.style.transitionDelay = `0s`;
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 text-center"
    >
      <h2 className="text-[80px] font-normal leading-relaxed flex flex-wrap justify-center gap-1">
        <span className="pop-word font-bold transform transition-all duration-500 opacity-0 scale-90">EXPLORE</span>{' '}
        OUR EXPERTISE{' '}
        <span className="pop-word font-bold transform transition-all duration-500 opacity-0 scale-90">EXCELLENCE</span>,{' '}
        <span className="pop-word font-bold transform transition-all duration-500 opacity-0 scale-90">EFFICIENCY</span>,{' '}
        <span className="pop-word font-bold transform transition-all duration-500 opacity-0 scale-90">EXPERIENCE</span>{' '}
        IN SYNC!
      </h2>
    </section>
  );
};

export default Section5;
