import { cn } from '@/lib/utils';
import React from 'react';

type SubtitleProps = {
    className?: string;
    text: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ className, text }) => {
    return <p className={cn(className, 'text-gray-500')}>{text}</p>
}
export default Subtitle;