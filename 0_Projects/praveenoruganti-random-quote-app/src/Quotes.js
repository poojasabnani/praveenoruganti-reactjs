import React from 'react';

const quoteBubble = {
    width: 400,
    background: "lightblue",
    borderRadius: "50%",
    padding: "3rem 4rem",
    margin: "1.5rem",
    textAlign: "center"
}


const quoteContainer = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    height: 280

}

const Quotes = (props) => {
    return (
        <div style={quoteContainer}>
            <h2 style={quoteBubble}>
                {props.quote} <br /> <br />
                - {props.author}.
            </h2>
        </div>
    );
}

export default Quotes;