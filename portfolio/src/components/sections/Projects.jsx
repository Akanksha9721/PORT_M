import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 py-20">
                    <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        {""}
                         My Projects
                    </h2>
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl  font-bold mb-2"> E-DOCTOR-ONLINE PALTEFORM</h3>
                            <p className="text-gray-400 mb-4">
                                {" "}
                                A comprehensive online platform that connects patients with doctors for virtual consultations,
                                appointment scheduling, and medical advice.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map((tech, key) => {
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                     ">
                                        {tech}
                                    </span>

                                }

                                )}

                            </div>
                            <div className=" flex justify-between items-center">
                                <a href="https://e-doctor-connect-8thy.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    {" "}
                                    View Project --{" "}
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl  font-bold mb-2"> UI-UX Marketplace</h3>
                            <p className="text-gray-400 mb-4">
                                {" "}
                                    
                                    A dynamic marketplace platform for UI/UX designers to showcase, sell, and purchase creative design assets, templates, and resources, fostering collaboration and innovation within the design community.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map((tech, key) => {
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                     ">
                                        {tech}
                                    </span>

                                }

                                )}

                            </div>
                            <div className=" flex justify-between items-center">
                                <a href="https://github.com/Akanksha9721/UI-UX-marketpalce" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    {" "}
                                    View Project --{" "}
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl  font-bold mb-2"> Image Gallery</h3>
                            <p className="text-gray-400 mb-4">
                                {" "}
                                       
                                    A responsive image gallery application that allows users to upload, browse, and organize images. Features include image categorization, search functionality, and a modern, user-friendly interface.


                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map((tech, key) => {
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                     ">
                                        {tech}
                                    </span>

                                }

                                )}

                            </div>
                            <div className=" flex justify-between items-center">
                                <a href=" https://github.com/Akanksha9721/Image-gallery" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    {" "}
                                    View Project --{" "}
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl  font-bold mb-2">Landing Page</h3>
                            <p className="text-gray-400 mb-4">
                                {" "}
                                    Built a responsive landing page using HTML, CSS, JavaScript (or React/Tailwind), optimized for fast loading and smooth user experience.  


                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map((tech, key) => {
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                     ">
                                        {tech}
                                    </span>

                                }

                                )}

                            </div>
                            <div className=" flex justify-between items-center">
                                <a href=" https://github.com/Akanksha9721/landing-Page?tab=readme-ov-file" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    {" "}
                                    View Project --{" "}
                                </a>
                            </div>
                        </div>


                    </div>

                </div>
            </RevealOnScroll>

        </section>
    );

}