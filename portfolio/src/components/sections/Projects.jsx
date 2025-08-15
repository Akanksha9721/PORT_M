import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    // Function to generate placeholder image URL
    const getPlaceholderImage = (title, theme) => {
        const themes = {
            medical: { bg: '0A4B6C', accent: '60A5FA' },
            design: { bg: '1E293B', accent: '38BDF8' },
            gallery: { bg: '0F172A', accent: '34D399' },
            landing: { bg: '18181B', accent: '8B5CF6' }
        };
        const { bg, accent } = themes[theme] || themes.medical;
        return `https://dummyimage.com/1280x720/${bg}/${accent}.png&text=${encodeURIComponent(title)}`;
    };

    const projects = [
        {
            title: "E-DOCTOR-ONLINE PLATFORM",
            description: "A comprehensive online platform that connects patients with doctors for virtual consultations, appointment scheduling, and medical advice.",
            image: getPlaceholderImage("E-Doctor Platform", "medical"),
            liveUrl: "https://e-doctor-connect-8thy.vercel.app/",
            githubUrl: "https://github.com/Akanksha9721/e-doctor",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
        },
        {
            title: "UI-UX Marketplace",
            description: "A dynamic marketplace platform for UI/UX designers to showcase, sell, and purchase creative design assets, templates, and resources.",
            image: getPlaceholderImage("UI/UX Marketplace", "design"),
            liveUrl: "https://github.com/Akanksha9721/UI-UX-marketpalce",
            githubUrl: "https://github.com/Akanksha9721/UI-UX-marketpalce",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
        },
        {
            title: "Image Gallery",
            description: "A responsive image gallery application with features for uploading, browsing, and organizing images with modern UI/UX design.",
            image: getPlaceholderImage("Image Gallery", "gallery"),
            liveUrl: "https://github.com/Akanksha9721/Image-gallery",
            githubUrl: "https://github.com/Akanksha9721/Image-gallery",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
        },
        {
            title: "Landing Page",
            description: "A responsive landing page optimized for performance and user experience, built with modern web technologies.",
            image: getPlaceholderImage("Landing Page", "landing"),
            liveUrl: "https://github.com/Akanksha9721/landing-Page",
            githubUrl: "https://github.com/Akanksha9721/landing-Page",
            techStack: ["React", "Tailwind CSS", "JavaScript"]
        }
    ];

    return (
        <section id="projects" className="relative py-20 overflow-hidden">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                My Projects
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Here are some of my featured projects that showcase my expertise in web development
                            and problem-solving abilities.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm
                                    hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-500
                                    hover:-translate-y-1"
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 z-10" />
                                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        onError={(e) => {
                                            const title = e.target.alt;
                                            e.target.src = `https://dummyimage.com/1280x720/1e293b/60a5fa.png&text=${encodeURIComponent(title)}`;
                                        }}
                                    />
                                    {/* Overlay with Links */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                                            >
                                                <span>Live Demo</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                                            >
                                                <span>Code</span>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm
                                                    hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                  


                </div>



            </RevealOnScroll>
        </section>
    );
};