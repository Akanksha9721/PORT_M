import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "React",
        "JavaScript",
        "TailwindCSS",
        "Next.js",
        "HTML",
        "CSS",
        "Bootstrap",
        "Redux",
    ];
    const backendSkills = [
        "Node.js",
        "Java",
        "MongoDB",
        "Express",
        "MySQL",
        "RESTful APIs",
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 w-full">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-xl p-4 sm:p-8 border-white/10 border hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5">
                        <p className="text-gray-300 mb-6 text-base sm:text-lg">
                            Passionate developer with expertise in building scalable web
                            applications and creating innovative solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5">
                                <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>                                                                                                                                    
                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5">
                                <h3 className="text-xl font-bold mb-4 text-blue-400">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        {/* Education Section */}
                        <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-white/5 overflow-hidden">
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 rounded-lg bg-blue-500/10 mr-4">
                                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-300">
                                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-7px] top-1.5"></div>
                                        <h4 className="text-lg font-semibold text-white mb-1">B.TECH in Computer Science</h4>
                                        <p className="text-blue-400 text-sm mb-2">APJ Abdul Kalam Technical University, Lucknow</p>
                                        <p className="text-gray-400 text-sm mb-2">2024 - 2027</p>
                                        <div className="text-gray-300 text-sm">
                                            <strong className="text-blue-400">Key Courses:</strong> Data Structures and Algorithms, JAVA, Python
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-300">
                                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-7px] top-1.5"></div>
                                        <h4 className="text-lg font-semibold text-white mb-1">Diploma in Computer Science</h4>
                                        <p className="text-blue-400 text-sm mb-2">Board of Technical Education Uttar Pradesh</p>
                                        <p className="text-gray-400 text-sm mb-2">2021 - 2024</p>
                                        <div className="text-gray-300 text-sm">
                                            <strong className="text-blue-400">Key Courses:</strong> Web Development and Design
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Work Experience Section */}
                        <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-white/5 overflow-hidden">
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 rounded-lg bg-blue-500/10 mr-4">
                                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Work Experience</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-300">
                                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-7px] top-1.5"></div>
                                        <h4 className="text-lg font-semibold text-white mb-1">MERN Stack Intern</h4>
                                        <p className="text-blue-400 text-sm mb-2">Digipodium Private Limited</p>
                                        <p className="text-gray-400 text-sm mb-2">Jan 2025 - May 2025</p>
                                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                            <li>Developed and maintained web applications using MERN stack</li>
                                            <li>Implemented full-stack features with React, Node.js, Express, and MongoDB</li>
                                            <li>Collaborated with team on multiple client projects</li>
                                        </ul>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-300">
                                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-7px] top-1.5"></div>
                                        <h4 className="text-lg font-semibold text-white mb-1">MERN Stack Trainee</h4>
                                        <p className="text-blue-400 text-sm mb-2">Digipodium Private Limited</p>
                                        <p className="text-gray-400 text-sm mb-2">Sept 2024 - Dec 2024</p>
                                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                            <li>Assisted in developing web applications using React</li>
                                            <li>Gained hands-on experience with Node.js and Express</li>
                                            <li>Learned best practices in full-stack development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};