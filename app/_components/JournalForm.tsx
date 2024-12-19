'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export const JournalForm = ({
    username,
    onJournalAdded,
}: {
    username: string;
    onJournalAdded: () => void;
}) => {
    const [journal, setJournal] = useState({
        title: '',
        affirmation: '',
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setJournal((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(
                `http://localhost:8081/user/journals/${username}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                    body: JSON.stringify(journal),
                }
            );

            if (response.ok) {
                alert('Journal added successfully!');
                onJournalAdded(); // Notify parent to refresh the journal list
                setJournal({ title: '', affirmation: '' }); // Reset form
            } else {
                console.error('Failed to add journal:', response.status);
                alert('Failed to add journal');
            }
        } catch (error) {
            console.error('Error adding journal:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='p-8'>
            <h2 className='text-2xl font-bold mb-6'>Add Journal</h2>
            <form onSubmit={handleOnSubmit} className='space-y-4'>
                <div>
                    <label htmlFor='title' className='block font-bold'>
                        Title
                    </label>
                    <input
                        type='text'
                        name='title'
                        value={journal.title}
                        onChange={handleChange}
                        className='w-full px-4 py-2 border rounded-md'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='affirmation' className='block font-bold'>
                        Affirmation
                    </label>
                    <input
                        type='text'
                        name='affirmation'
                        value={journal.affirmation}
                        onChange={handleChange}
                        className='w-full px-4 py-2 border rounded-md'
                        required
                    />
                </div>
                <button
                    type='submit'
                    disabled={isLoading}
                    className='px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600'
                >
                    {isLoading ? 'Adding...' : 'Add Journal'}
                </button>
            </form>
        </div>
    );
};
