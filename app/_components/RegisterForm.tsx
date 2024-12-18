'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CustomUser, CustomUserForm } from '../_type/ICustomUser';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
    const [customUser, setCustomUser] = useState<CustomUserForm>({
        username: '',
        password: '',
        repeatPassword: '',
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    // Handle input changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCustomUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Submit form data
    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const newUser: CustomUser = {
            username: customUser.username,
            password: customUser.password,
        };

        try {
            const response = await fetch('http://localhost:8081/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                console.log('User successfully registered');
                alert('Registration successful!');
                router.push('/login');
            } else {
                console.error('Registration failed');
            }
        } catch (err) {
            console.error('Failed to connect to server');
        }

        setIsLoading(false);
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
                            priority
                        />
                    </div>
                </div>

                <h2 className='text-2xl font-bold mb-6 py-4 text-center'>
                    Register
                </h2>

                <form
                    className='space-y-4'
                    onSubmit={handleOnSubmit}
                    method='post'
                >
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
                            value={customUser.username}
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
                            value={customUser.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor='repeatPassword' className='font-bold'>
                            Confirm Password
                        </label>
                        <input
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            type='password'
                            name='repeatPassword'
                            placeholder='Confirm Password'
                            value={customUser.repeatPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition'
                    >
                        {isLoading ? 'Submitting...' : 'Register'}
                    </button>
                </form>

                <p className='pt-8 text-center'>
                    Already have an account?{' '}
                    <Link
                        href='/login'
                        className='text-indigo-500 hover:text-indigo-700'
                    >
                        Go to Login
                    </Link>
                </p>
            </div>
        </div>
    );
};
