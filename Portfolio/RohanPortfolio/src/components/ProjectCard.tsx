import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import CyberCard from './CyberCard';

export interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubUrl, liveUrl }) => {
    return (
        <CyberCard className="h-full flex flex-col bg-cyber-dark/50" title={title}>
            <p className="text-gray-400 mb-6 leading-relaxed flex-grow font-mono text-sm">
                {description}
            </p>

            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-cyber-cyan border border-cyber-cyan/30 px-2 py-1">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 border-t border-cyber-cyan/10 pt-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-300 hover:text-cyber-cyan transition-colors"
                        >
                            <Github size={16} className="mr-2" /> CODE
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-300 hover:text-cyber-cyan transition-colors"
                        >
                            <ExternalLink size={16} className="mr-2" /> LIVE_DEMO
                        </a>
                    )}
                </div>
            </div>
        </CyberCard>
    );
};

export default ProjectCard;
