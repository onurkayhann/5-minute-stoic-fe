import { useState, useEffect } from 'react';
import { StoicJournal } from '../_type/IStoicJournal';

export default function JournalComponent({
    username,
    refreshTrigger,
}: {
    username: string;
    refreshTrigger: boolean;
}) {
    const [journals, setJournals] = useState<StoicJournal[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchJournals = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8081/user/journals/${username}`
                );
                if (response.ok) {
                    const data: StoicJournal[] = await response.json();
                    setJournals(data);
                } else {
                    console.error('Failed to fetch journals:', response.status);
                }
            } catch (error) {
                console.error('Error fetching journals:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJournals();
    }, [username, refreshTrigger]);

    return (
        <div className='p-8'>
            <h2 className='text-2xl font-bold mb-4'>Your Journals</h2>
            {isLoading ? (
                <p>Loading journals...</p>
            ) : (
                <div className='space-y-4'>
                    {journals.length > 0 ? (
                        journals.map((journal) => (
                            <div
                                key={journal.id}
                                className='p-4 border rounded-md shadow-md bg-gray-100'
                            >
                                <h3 className='font-bold text-lg'>
                                    {journal.title}
                                </h3>
                                <p>{journal.affirmation}</p>
                            </div>
                        ))
                    ) : (
                        <p>No journals found.</p>
                    )}
                </div>
            )}
        </div>
    );
}
