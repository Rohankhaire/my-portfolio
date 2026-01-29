import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <SectionHeader title="Contact" subtitle="Get in touch for opportunities or collaborations." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-6 font-tech text-cyber-cyan">ESTABLISH_CONNECTION</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed font-mono text-sm">
                        <span className="text-cyber-cyan mr-2">{`>`}</span>
                        Status: Available for new operations.
                        <br />
                        <span className="text-cyber-cyan mr-2">{`>`}</span>
                        Awaiting input for collaboration protocols.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:rohaneknathkhaire@gmail.com" className="flex items-center text-lg md:text-xl font-medium text-gray-300 hover:text-cyber-cyan hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all p-2 rounded border border-transparent hover:border-cyber-cyan/30">
                            <Mail className="mr-4 text-cyber-cyan" size={24} />
                            rohaneknathkhaire@gmail.com
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg md:text-xl font-medium text-gray-300 hover:text-cyber-cyan hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all p-2 rounded border border-transparent hover:border-cyber-cyan/30">
                            <Linkedin className="mr-4 text-cyber-cyan" size={24} />
                            LinkedIn Profile
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg md:text-xl font-medium text-gray-300 hover:text-cyber-cyan hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all p-2 rounded border border-transparent hover:border-cyber-cyan/30">
                            <Github className="mr-4 text-cyber-cyan" size={24} />
                            GitHub Profile
                        </a>
                    </div>
                </div>

                {/* Minimal Form */}
                <div>
                    <h3 className="text-xl font-bold mb-6 font-tech text-cyber-cyan">TRANSMISSION_FORM</h3>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold mb-2 font-mono text-cyber-cyan/80">IDENTITY</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-cyber-dark/50 border border-cyber-cyan/30 p-3 focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-white placeholder-gray-600"
                                placeholder="ENTER_NAME"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold mb-2 font-mono text-cyber-cyan/80">CONTACT_FREQUENCY</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-cyber-dark/50 border border-cyber-cyan/30 p-3 focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-white placeholder-gray-600"
                                placeholder="ENTER_EMAIL"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold mb-2 font-mono text-cyber-cyan/80">DATA_PACKET</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-cyber-dark/50 border border-cyber-cyan/30 p-3 focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-white placeholder-gray-600"
                                placeholder="ENTER_MESSAGE..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full cyber-btn group flex items-center justify-center gap-2"
                        >
                            <span className="group-hover:animate-pulse">INITIATE_TRANSMISSION</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
