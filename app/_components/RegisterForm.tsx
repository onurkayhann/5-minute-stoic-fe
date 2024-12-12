import Link from 'next/link';
import Image from 'next/image';

export const RegisterForm = () => {
    return (
        <div className='h-screen flex justify-center items-center p-16 bg-gray-100'>
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

                <h2 className='text-2xl font-bold mb-6 py-14 text-center'>
                    Register
                </h2>

                <form className='space-y-6'>
                    <div>
                        <p className='font-bold'>Email</p>
                        <input
                            type='email'
                            placeholder='Email'
                            className='w-full px-4 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    <div>
                        <p className='font-bold'>Password</p>
                        <input
                            type='password'
                            placeholder='Password'
                            className='w-full px-4 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    <div>
                        <p className='font-bold'>Confirm Password</p>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full px-4 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition'
                    >
                        Register
                    </button>
                </form>
                <p className='pt-8'>
                    Already have an account?{' '}
                    <Link
                        href='#'
                        className='text-indigo-500 hover:text-indigo-700'
                    >
                        Go to Login
                    </Link>
                </p>
            </div>
        </div>
    );
};
