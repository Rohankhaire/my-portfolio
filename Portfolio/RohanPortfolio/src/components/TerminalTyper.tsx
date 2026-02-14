import React, { useState, useEffect } from 'react';

interface TerminalTyperProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    className?: string;
}

const TerminalTyper: React.FC<TerminalTyperProps> = ({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 1500,
    className = ''
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    // Typing logic
    useEffect(() => {
        const currentWord = words[wordIndex];

        let timer: ReturnType<typeof setTimeout>;

        if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && displayedText === currentWord) {
            // Finished typing, wait then delete
            clearTimeout(timer);
            timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayedText === '') {
            // Finished deleting, move to next word
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={`${className} inline-flex items-center font-mono text-cyber-cyan`}>
            <span className="mr-2 text-cyber-cyan/70">{'>'}</span>
            {displayedText}
            <span className={`ml-1 w-2 h-5 bg-cyber-cyan ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
        </span>
    );
};

export default TerminalTyper;
