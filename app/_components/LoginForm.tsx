'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface LoginRequest {
    username: string;
    password: string;
}

export const LoginForm = () => {
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({
        username: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    // Handle input changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8081/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(loginRequest),
            });

            if (response.ok) {
                const message = await response.text();
                console.log('Login Successful:', message);
                alert('Login Successful');
                router.push(`/home?username=${loginRequest.username}`);
            } else if (response.status === 404) {
                alert('User not found');
            } else if (response.status === 401) {
                alert('Invalid credentials');
            } else {
                console.error('Login failed:', response.status);
            }
        } catch (error) {
            console.error('Failed to connect to server:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 p-16'>
            <div className='w-full max-w-sm bg-white p-8 shadow-lg rounded-lg'>
                <div className='flex justify-center'>
                    <div className='w-24 h-24 rounded-full overflow-hidden border border-indigo-500'>
                        <Image
                            src='/assets/app-logo.svg'
                            alt='Logo'
                            width={96}
                            height={96}
                        />
                    </div>
                </div>

                <h2 className='text-2xl font-bold mb-6 py-4 text-center'>
                    Login
                </h2>

                {/* Login Form */}
                <form onSubmit={handleOnSubmit} className='space-y-4'>
                    {/* Username */}
                    <div>
                        <label htmlFor='username' className='font-bold'>
                            Username
                        </label>
                        <input
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={loginRequest.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor='password' className='font-bold'>
                            Password
                        </label>
                        <input
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={loginRequest.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={isLoading}
                        className='w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition'
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className='pt-8 text-center'>
                    Need to create an account?{' '}
                    <Link
                        href='/register'
                        className='text-indigo-500 hover:text-indigo-700'
                    >
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
};
