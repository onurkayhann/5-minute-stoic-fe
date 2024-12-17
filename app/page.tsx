'use client';

import { LoginForm } from './_components/LoginForm';
import { RegisterForm } from './_components/RegisterForm';

export default function Home() {
    return (
        <div className='flex-col'>
            <h1>5 Minute Stoic - LOGO HERE</h1>
            {/* <LoginForm /> */}
            <RegisterForm key='register-form' />
        </div>
    );
}
