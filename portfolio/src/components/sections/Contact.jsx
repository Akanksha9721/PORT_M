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
    const SERVICE_ID = "service_474tcbs";
    const TEMPLATE_ID = "template_6xhl653";
    const PUBLIC_KEY = "8VrKqtzMFeBQwluo2";

    const form = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
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
                <div className="px-4 w-150 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        {" "}
                        Get IN Touch
                    </h2>
                    <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name"
                             required
                              value={formData.name}
                                className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="your name..."
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }

                            />


                        </div>
                        <div className="relative">
                            <input type="text" id="emial" name="email" required value={formData.email}
                                className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@12gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }

                            />



                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="your message..."
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            >
                            </textarea>



                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 py-6 px-6 rounded font-medium transiton relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message

                        </button>
                    </form>

                </div>
            </RevealOnScroll>




        </section>
    );
}