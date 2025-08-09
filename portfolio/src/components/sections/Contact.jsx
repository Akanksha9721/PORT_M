import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
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
                            <from className=" space-y-6">
                                <div className="relative">
                                    <input type="text" id="name" name="name" required className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline focus:border-blue-500 focus:bg-blue-500/5" placeholder="your name..."
                                    />
                                

                                </div>
                                <div className="relative">
                                    <input type="text" id="emial" name="email" required className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@12gmail.com"/>
                                
                                

                                </div>
                                <div className="relative">
                                    <textarea 
                                     id="message" 
                                     name="message"
                                    required 
                                    rows={5}
                                    className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline focus:border-blue-500 focus:bg-blue-500/5"
                                     placeholder="your message...">
                                    </textarea>
                                    
                                

                                </div>
                                <button type="submit" className="w-full bg-blue-500 text-white py-3 py-6 px-6 rounded font-medium transiton relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                    Send Message
                                    
                                </button>
                            </from>

                    </div>
                </RevealOnScroll>

           


        </section>
    );
}