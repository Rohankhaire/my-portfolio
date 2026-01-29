import React from 'react';

export interface TimelineItemProps {
    year: string;
    title: string;
    organization: string;
    description: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, organization, description }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-b border-cyber-cyan/20 last:border-0 hover:bg-white/5 transition-colors px-4">
            <div className="w-full md:w-1/4 shrink-0">
                <span className="font-mono text-sm text-cyber-cyan bg-cyber-cyan/10 px-2 py-1 rounded">{year}</span>
            </div>
            <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold mb-1 text-white font-tech">{title}</h3>
                <div className="text-cyber-teal font-medium mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyber-teal rounded-full" />
                    {organization}
                </div>
                <ul className="space-y-2">
                    {description.map((item, index) => (
                        <li key={index} className="text-gray-400 leading-relaxed text-sm font-mono flex gap-2">
                            <span className="text-cyber-cyan opacity-50">{`>`}</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimelineItem;
