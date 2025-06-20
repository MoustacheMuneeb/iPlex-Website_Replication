import React, { useEffect } from 'react'
import Layout from '../layout';

const Section1 = () => {
    useEffect(() => {
        const target = document.getElementById('aboutText');

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    target.classList.add('opacity-100', 'translate-y-0');
                    target.classList.remove('opacity-0', 'translate-y-10');
                } else {
                    target.classList.add('opacity-0', 'translate-y-10');
                    target.classList.remove('opacity-100', 'translate-y-0');
                }
            },
            { threshold: 0.2 }
        );

        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);
    return (
        <section className="relative container mx-auto h-[120vh] flex items-end  overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-150 origin-top"
            >
                <source src="/aiml-banner.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-20 text-white ps-6">
                <p className="!text-white font-medium text-[85px] w-2/3 mb-20 leading-[6rem]">
                    Beyond Expectations: Design, Develop, and Deploy
                </p>
                <p
                    id="aboutText"
                    className="opacity-0 translate-y-10 transition-all duration-700 ease-out !text-white font-normal w-3/4 text-[32px] mb-4"
                >
                    At iPlex, we pride ourselves on delivering excellence in web design, development, and deployment.
                </p>
            </div>
        </section>


    )
}

export default Section1