'use client'
import { useSearchParams } from 'next/navigation';

export default function HomePage() {
    const searchParams = useSearchParams();
    const username = searchParams.get('username');

    return (
        <div>
            <p>Welcome {username ? username : 'Guest'}!</p>
        </div>
    );
}
