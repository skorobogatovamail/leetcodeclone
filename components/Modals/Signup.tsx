import React from 'react';
import BasicModal from './BasicModal';
import { Button } from '../ui/button';
import Link from 'next/link';
type SignupProps = {

};

const Signup: React.FC<SignupProps> = () => {
    return (
        <BasicModal title='Create an account'>
            <form>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'
                            className='text-sm font-medium text-gray-500'
                        >Your email</label>
                        <input
                            name='email'
                            id='email'
                            type="email"
                            className='
                        border
                        border-slate-300 
                        rounded-md 
                        outline-none bg-white p-2 text-sm text-gray-500 placeholder-gray-400
                        focus:border-blue-500'
                            placeholder='email@example.com'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password'
                            className='text-sm font-medium text-gray-500'
                        >Your password</label>
                        <input
                            name='password'
                            id='password'
                            type="password"
                            className='
                        border
                        border-slate-300 
                        rounded-md 
                        outline-none bg-white p-2 text-sm text-gray-500 placeholder-gray-400
                        focus:border-blue-500'
                            placeholder='*******'
                        />
                    </div>
                    <div className='pt-2'>
                        <Button className='w-full' type='submit'>Register</Button>
                    </div>
                    <div className='pt-2 text-sm flex gap-2'>
                        <span>Already have an account?</span>
                        <Link href='/login' className='text-blue-500 hover:underline'>Log In</Link>
                    </div>
                </div>
            </form>
        </BasicModal >
    )
}
export default Signup;