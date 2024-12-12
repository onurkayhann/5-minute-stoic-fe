'use client';

import Image from 'next/image';
import { LoginForm } from './_components/LoginForm';
import { RegisterForm } from './_components/RegisterForm';

export default function Home() {
    return (
        <div className='flex-col'>
            <h1>5 Minute Stoic - LOGO HERE</h1>
            <LoginForm />
            <RegisterForm />
        </div>
    );
}
