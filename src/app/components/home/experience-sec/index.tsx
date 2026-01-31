import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "February 2024 - April 2024",
            title: "Web Designer",
            company: "NxtLife Technologies",
            type: "Fulltime",
            description: "Completed a hands-on internship in web designing, where I worked on website layouts, landing page designs, logo creation, and content structure. I collaborated with the team to deliver responsive, clean, and effective designs while learning real-world project execution and workflow management."
        },
        {
            year: "May 2024 – June 2025",
            title: "UI/UX Designer",
            company: "Alvio Labs",
            type: "Remote",
            description: "Worked as a UI/UX Designer for 1 year, creating modern, user-focused interfaces for websites and web applications. During this role, I designed interactive dashboards, improved user flows, handled branding/UI styling, and created prototypes using Figma. I also worked closely with the development team to ensure accurate implementation of designs."
        },
        {
            year: "June 2025 – Present",
            title: "Frontend Developer",
            company: "Isar Systems and Technologies",
            type: "Fulltime",
            description: "Currently working as a Frontend Developer, where I build responsive, high-performance websites and dashboards. My responsibilities include converting UI/UX designs into pixel-perfect interfaces, improving user experience, optimizing website performance, and ensuring browser compatibility across devices. I also collaborate with backend teams to implement seamless functionality."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;