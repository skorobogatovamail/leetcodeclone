import React from 'react';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';

import { Problem } from '@/data/types/problem';

type ProblemDescriptionConstraintsProps = {
    constraints: Problem['constraints']
};

const ProblemDescriptionConstraints: React.FC<ProblemDescriptionConstraintsProps> = ({ constraints }) => {

    return (
        <div className='my-8 pb-4'>
            <div className='text-sm font-medium'>Constraints:</div>
            <ul className='ml-5 list-disc '>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{constraints}</ReactMarkdown>
            </ul>
        </div>
    )
}
export default ProblemDescriptionConstraints;