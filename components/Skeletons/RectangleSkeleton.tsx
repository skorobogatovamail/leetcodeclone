import React from "react";

const RectangleSkeleton: React.FC = () => {
    return (
        <div className='space-y-2.5 animate-pulse max-w-lg'>
            <div className='flex items-center w-full space-x-2'>
                <div className='w-12 h-6 rounded-full bg-neutral-200'></div>
            </div>
        </div>
    );
};
export default RectangleSkeleton;