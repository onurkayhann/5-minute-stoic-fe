'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export const JournalForm = () => {
    const [journal, setJournal] = useState({
        title: '',
        affirmation: '',
    });

    // Handle input changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setJournal((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Submit logic can be added here
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 p-16'>
            <div className='w-full max-w-sm bg-white p-8 shadow-lg rounded-lg'>
                <h2 className='text-2xl font-bold mb-6 py-4 text-center'>
                    Add Journal
                </h2>

                {/* Journal Form */}
                <form onSubmit={handleOnSubmit} className='space-y-4'>
                    {/* Title */}
                    <div>
                        <label htmlFor='title' className='font-bold'>
                            Title
                        </label>
                        <input
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            type='text'
                            name='title'
                            placeholder='Enter journal title'
                            value={journal.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Affirmation */}
                    <div>
                        <label htmlFor='affirmation' className='font-bold'>
                            Affirmation
                        </label>
                        <input
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            type='text'
                            name='affirmation'
                            placeholder='Enter journal affirmation'
                            value={journal.affirmation}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
