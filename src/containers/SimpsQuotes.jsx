import React, { useState } from 'react';
import Load from '../components/quotes/Load'
import Quote from '../components/quotes/Quote';
import { fetchQuote } from '../service/simpsonsApi';

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState({});

    const handleClick = async() => {
        const qoute = await fetchQuote();
        setQuote(qoute);
    }


    return (
        <>
            <Load onClick={handleClick} />
            <Quote name={quote.name} text={quote.text} image={quote.image}/>
        </>
    )
}

export default SimpsonsQuote;