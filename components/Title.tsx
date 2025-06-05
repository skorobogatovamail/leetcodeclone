import { cn } from '@/lib/utils';
import React from 'react';

type TitleProps = {
    className?: string
    text: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Title: React.FC<TitleProps> = ({ className, text, as = 'h1' }) => {
    const Tag = as;
    const size = {
        h1: 'text-4xl',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base',
    };
    return <Tag className={cn(className, 'font-bold', size[as])}>{text}</Tag>
}
export default Title;