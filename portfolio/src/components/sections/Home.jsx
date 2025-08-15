import {RevealOnScroll} from "../RevealOnScroll";
export const Home = () => {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Akanksha Yadav
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto px-4">
                        I am a full stack developer with a passion for creating dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                        <a href="#projects"
                            className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 font-medium rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        <a href="/assets/resume.pdf"
                            download
                            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 font-medium rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2"
                        >
                            <span>Download Resume</span>
                            <svg 
                                className="w-5 h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </a>
                        <a href="#contact"
                            className="w-full sm:w-auto border border-blue-500/50 text-blue-500 py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                            Contact
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

        </section>

    );
}