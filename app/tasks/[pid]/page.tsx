import Navbar from '@/components/Navbar';
import React from 'react';


const ProblemPage: React.FC = () => {

    return (
        <>
            <Navbar problemPage />
            <div className="px-8 sm:px-20 bg-gradient-to-b from-slate-50 to-white"></div>
        </>
    )
}
export default ProblemPage;