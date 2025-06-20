import React, { useEffect, useRef, useState } from 'react';

const Section3 = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const [visible, setVisible] = useState({ heading: false, paragraph: false });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            if (target === headingRef.current) {
              setVisible((prev) => ({ ...prev, heading: true }));
            }
            if (target === paraRef.current) {
              setVisible((prev) => ({ ...prev, paragraph: true }));
            }
          } else {
            if (target === headingRef.current) {
              setVisible((prev) => ({ ...prev, heading: false }));
            }
            if (target === paraRef.current) {
              setVisible((prev) => ({ ...prev, paragraph: false }));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (paraRef.current) observer.observe(paraRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paraRef.current) observer.unobserve(paraRef.current);
    };
  }, []);

  return (
    <section className="flex items-center justify-between px-6 py-32">
      <h2
        ref={headingRef}
        className={`ps-6 text-[28px] font-semibold transform transition-all duration-700 ease-out ${
          visible.heading ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        Why Trust iPlex? <br />Discover our Expertise
      </h2>
      <p
        ref={paraRef}
        className={`font-normal text-[18px] flex-wrap container mb-4 w-1/2 transform transition-all duration-700 ease-out ${
          visible.paragraph ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
      >
        We are a digital marketing agency with expertise, and we’re on a mission to help you take the next step in your business.
      </p>
    </section>
  );
};

export default Section3;
