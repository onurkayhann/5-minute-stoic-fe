'use client';

import { useSearchParams } from 'next/navigation';
import JournalComponent from '../_components/JournalComponent';

export default function HomePage() {
    const searchParams = useSearchParams();
    const username = searchParams.get('username');

    return (
        <div className='p-8'>
            <h1 className='text-2xl font-bold'>
                Welcome {username || 'User'}!
            </h1>
            {username ? (
                <JournalComponent username={username} />
            ) : (
                <p>User not found or error occurred.</p>
            )}
        </div>
    );
}
