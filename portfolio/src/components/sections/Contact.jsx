import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",

    }
    )

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Oops! Something went wrong, please try again later.")
            })
    };
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-center mb-12 text-base sm:text-lg">
                        Feel free to reach out. I'd love to hear from you!
                    </p>
                    <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl hover:border-blue-500/30 transition-all duration-300">
                        <form ref={form} className="space-y-8" onSubmit={handleSubmit}>
                            <div className="relative">
                                <label htmlFor="name" className="block text-sm font-medium text-blue-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className="w-full bg-white/5 border-2 border-white/10 rounded-lg px-4 py-3 text-white text-base sm:text-lg
                                        transition-all duration-300 
                                        focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500
                                        hover:border-blue-500/50
                                        placeholder:text-gray-500"
                                    placeholder="Your name..."
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="email" className="block text-sm font-medium text-blue-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className="w-full bg-white/5 border-2 border-white/10 rounded-lg px-4 py-3 text-white text-base sm:text-lg
                                        transition-all duration-300 
                                        focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500
                                        hover:border-blue-500/50
                                        placeholder:text-gray-500"
                                    placeholder="example@email.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="message" className="block text-sm font-medium text-blue-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    rows={5}
                                    className="w-full bg-white/5 border-2 border-white/10 rounded-lg px-4 py-3 text-white text-base sm:text-lg
                                        transition-all duration-300 
                                        focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500
                                        hover:border-blue-500/50
                                        placeholder:text-gray-500 resize-none"
                                    placeholder="Your message..."
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 px-8 rounded-lg 
                                    font-semibold text-base sm:text-lg tracking-wide
                                    transition-all duration-300 
                                    transform hover:-translate-y-0.5 
                                    hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                                    active:scale-95
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                Send Message
                            </button>
                            <p className="text-center text-gray-400 text-sm mt-4">
                                I'll get back to you as soon as possible
                            </p>
                        </form>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}