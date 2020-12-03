import React, { useState, useEffect } from 'react';
import Quotes from './Quotes';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const QuoteBox = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const quoteButton = {
        display: "flex",
        justifyContent: "center",
        bottom: "-180px",
        position: "relative"
    }

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        axios.get(url)
            .then(res => {
                let data = res.data.quotes;
                let quoteNum = Math.floor(Math.random() * data.length);
                let randomQuote = data[quoteNum];
                setQuote(randomQuote['quote']);
                setAuthor(randomQuote['author']);

            })
            .catch(err => {
                console.log(err);
            });
    }
    return (

        <>
            <Quotes quote={quote} author={author} />
            <div style={quoteButton}>
                <Button variant="contained" color="primary" onClick={getQuote}>
                    New Quote
            </Button>
            </div>
        </>


    )
}

export default QuoteBox;