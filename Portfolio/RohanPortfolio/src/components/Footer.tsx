import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 border-t border-gray-100 mt-20">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Rohan. All rights reserved.</p>
                <div className="mt-2 md:mt-0 flex space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
                    <a href="mailto:rohan@example.com" className="hover:text-black transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
