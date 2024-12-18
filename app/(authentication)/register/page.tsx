'use client';

import { CustomUserForm } from '@/app/_type/ICustomUser';
import { RegisterForm } from '../../_components/RegisterForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {

    return (
        <div>
            <RegisterForm />
        </div>
    );
}
