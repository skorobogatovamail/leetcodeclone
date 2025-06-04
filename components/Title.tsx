import { cn } from '@/lib/utils';
import React from 'react';

type TitleProps = {
    className?: string
    text: string;
};

const Title: React.FC<TitleProps> = ({ className, text }) => {
    return <h1 className={cn(className, 'text-3xl font-bold tracking-tight capitalize')}>{text}</h1>
}
export default Title;