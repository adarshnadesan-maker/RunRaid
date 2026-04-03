import React, { useState } from 'react';
import { toast } from 'react-toastify';

const JokeGenerator = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPunchline, setShowPunchline] = useState(false);

    const fetchJoke = async () => {
        setLoading(true);
        setShowPunchline(false);
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            if (!response.ok) throw new Error('Network response was not okay');
            const data = await response.json();
            setJoke(data);
        } catch (error) {
            toast.error(`Error fetching joke: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Random Joke Generator</h1>
            {loading ? (
                <p>Loading...</p>
            ) : ( 
                joke ? (
                    <div>
                        <p>{joke.setup}</p>
                        {showPunchline && <p>{joke.punchline}</p>}
                        <button onClick={() => setShowPunchline(!showPunchline)}>{showPunchline ? 'Hide Punchline' : 'Reveal Punchline'}</button>
                    </div>
                ) : (
                    <p>No joke found. Please fetch one!</p>
                )
            )}
            <button onClick={fetchJoke}>Get Joke</button>
        </div>
    );
};

export default JokeGenerator;
