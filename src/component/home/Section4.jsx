import React from 'react';
const hoverColors = [
    'hover:bg-blue-600',
    'hover:bg-red-600',
    'hover:bg-green-600',
    'hover:bg-purple-600',
    'hover:bg-pink-600',
    'hover:bg-yellow-500',
    'hover:bg-indigo-600',
    'hover:bg-teal-600'
];

const services = [
    { title: 'IT Consultancy', description: 'iPlex offers clear solutions for your IT challenges. We provide precise strategies for optimal results. Choose iPlex for dependable and efficient IT consultancy.' },
    { title: 'Project Management', description: 'iPlex manages your projects with skilled precision.We plan with the strategies and execute with the requirements. In short, we are your ultimate choice for project management' },
    { title: 'Cloud Computing', description: 'iPlex delivers expert cloud computing services with precision to its customers. Our software solutions are designed to meet all criteria of market requirements. Hold on! You are at Iplex, which delivers exceptional experiences.' },
    { title: 'Digital Branding', description: 'Our main goal is to build your digital brand identity in a competitive environment. Our tailored approaches make your brand resonate with users. That’s why we are unmeetable in digital branding.' },
    { title: 'Web Development', description: 'What most encourages you to come to iPlex is its web development services with advanced features and modern technology adoption. We not only focus on design, but we also create exceptions in web development methods and provide optimal performance.' },
    { title: 'Mobile App Development', description: 'Is that your need to have a mobile application with smooth and easy-to-use features? Your thinking about us is logical because we have the best developer team to meet your mobile application needs with a choice of tech stacks..' },
    { title: 'UI/UX Design', description: 'We create UI/UX designs that captivate and engage customers. Our designs are so smooth and catchy for their look that we encourage you to come and experience them. Your satisfaction regarding design is our main priority.' },
    { title: 'Quality Assurance', description: 'iPlex maintains the highest standards of quality assurance in all our software. Our QA methods involved detailed checks to perfect software functionality. Your concerns regarding software are addressed there.' }
];

const ServiceCard = ({ title, description, hoverColor }) => {
    const [line1, line2] = title.split(' ');
   return (
    <div className={`group relative bg-white border p-6 overflow-hidden transition-all duration-500 ${hoverColor} hover:text-white min-h-[350px]`}>
      <h2 className="text-[40px] font-extrabold leading-[1] mb-4 group-hover:!text-white">
        {line1} <br /> {line2}
      </h2>
      <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-500 ease-in-out text-[16px] leading-[1.5] !text-white">
        {description}
      </p>
      <p className="absolute bottom-6 left-6 text-black group-hover:opacity-0 transition-opacity duration-300">
        Hit us up for future projects or a simple talk.
      </p>
    </div>
  );
};

const Section4 = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-30">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        hoverColor={hoverColors[index % hoverColors.length]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Section4;
