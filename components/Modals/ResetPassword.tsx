import React from 'react';
import BasicModal from './BasicModal';
import { Button } from '../ui/button';
import Link from 'next/link';
import Subtitle from '../Subtitle';
type ResetPasswordProps = {

};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    return (
        <BasicModal title='Reset Password'>
            <Subtitle text='Enter your email to reset your password' />
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
                    <div className='pt-2'>
                        <Button className='w-full' type='submit'>Reset Password</Button>
                    </div>
                </div>
            </form>
        </BasicModal >
    )
}
export default ResetPassword;