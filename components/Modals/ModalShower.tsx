
'use client'

import { RootState } from '@/lib/store';
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';


const ModalShower: React.FC = () => {
    const isOpened = useSelector((state: RootState) => state.authModal.isOpened);
    const modalType = useSelector(
        (state: RootState) => state.authModal.modalType
    );

    return (
        <>
            {isOpened && modalType === "login" && <Login />}
            {isOpened && modalType === "register" && <Signup />}
            {isOpened && modalType === "resetPassword" && <ResetPassword />}
        </>
    )
}
export default ModalShower;