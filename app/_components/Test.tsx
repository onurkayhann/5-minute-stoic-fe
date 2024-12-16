import { useEffect } from 'react';

export const Test = () => {
    useEffect(() => {
        test();
    }, []);

    async function test() {
        const response = await fetch('http://localhost:8081/user/all');
        const data = await response.json();

        console.log(data);
    }

    return <div></div>;
};
