import React from 'react';
import { useSelector } from 'react-redux';

const Greeting  = () => {
    const greeting = useSelector((state) => state.greetingMessage);
    console.log(greeting);
    return (
    <div>
    <h1>{greeting.greeting}</h1>
    </div>
    );
}
export default Greeting;