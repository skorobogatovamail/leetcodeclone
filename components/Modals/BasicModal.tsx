import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Title from '../Title';

type BasicModalProps = {
    title: string;
};

const BasicModal: React.FC<React.PropsWithChildren<BasicModalProps>> = ({ title, children }) => {

    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full items-center justify-center bg-slate-100 opacity-50'></div>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center w-full'>
                <div className='w-full mx-40 rounded-lg shadow bg-slate-200 p-4 flex flex-col gap-2'>
                    <div>
                        <div className='flex justify-between '>
                            <Title text={title} as='h4'></Title>
                            <Button size='sm' variant='outline'>
                                <X />
                            </Button>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}
export default BasicModal;