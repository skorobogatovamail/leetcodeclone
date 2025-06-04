import React from 'react';
import Logo from '../Logo/Logo';
import { Button } from '../ui/button';

type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {

    return (
        <div className='flex items-center justify-between px-8 py-5 border-b'>
            <Logo />
            <div className='flex items-center justify-between gap-2'>
                <Button variant='outline'>Login</Button>
                <Button >Sign Up</Button>
            </div>
        </div>
    )
}
export default Navbar;