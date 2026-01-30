import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);

        // Add your Web3Forms Access Key here
        formData.append("access_key", "69369ff1-bed9-4db7-aa20-adb5b8cc4ab2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage('TRANSMISSION_SUCCESS: Message received by base station.');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
                setMessage(data.message || 'TRANSMISSION_FAILED: Connection unstable.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('SYSTEM_ERROR: Uplink timeout. Please try again.');
        }
    };

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
                <div className="relative">
                    <h3 className="text-xl font-bold mb-6 font-tech text-cyber-cyan">TRANSMISSION_FORM</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Honeypot for spam prevention */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        <div>
                            <label htmlFor="name" className="block text-sm font-bold mb-2 font-mono text-cyber-cyan/80">IDENTITY</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-cyber-dark/50 border border-cyber-cyan/30 p-3 focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-white placeholder-gray-600"
                                placeholder="ENTER_NAME"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold mb-2 font-mono text-cyber-cyan/80">CONTACT_FREQUENCY</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-cyber-dark/50 border border-cyber-cyan/30 p-3 focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-white placeholder-gray-600"
                                placeholder="ENTER_EMAIL"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold mb-2 font-mono text-cyber-cyan/80">DATA_PACKET</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-cyber-dark/50 border border-cyber-cyan/30 p-3 focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all font-mono text-white placeholder-gray-600"
                                placeholder="ENTER_MESSAGE..."
                            />
                        </div>

                        {/* Status Message */}
                        {status !== 'idle' && (
                            <div className={`flex items-center gap-2 font-mono text-xs p-3 border ${status === 'success' ? 'border-green-500/50 text-green-400 bg-green-500/5' :
                                status === 'error' ? 'border-red-500/50 text-red-400 bg-red-500/5' :
                                    'border-cyber-cyan/30 text-cyber-cyan/50'
                                } transition-all animate-pulse`}>
                                {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
                                {status === 'success' && <CheckCircle2 size={16} />}
                                {status === 'error' && <AlertCircle size={16} />}
                                {status === 'loading' ? 'INITIALIZING_UPLINK...' : message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full cyber-btn group flex items-center justify-center gap-3 transition-all ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <span className="group-hover:animate-pulse">
                                {status === 'loading' ? 'SENDING...' : 'INITIATE_TRANSMISSION'}
                            </span>
                            {status === 'loading' ? (
                                <Loader2 size={20} className="animate-spin" />
                            ) : (
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

