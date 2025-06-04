import { GraduationCap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type LogoProps = {

};

const Logo: React.FC<LogoProps> = () => {

    return (
        <div className=''>
            <Link href='/' className='text-xl font-bold flex justify-between gap-2 items-center'>
                <GraduationCap />
                <span>LeetcodeClone</span>
            </Link>
        </div>)
}
export default Logo;