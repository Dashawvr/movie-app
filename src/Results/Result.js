import React from "react";

function Result({ result ,openSelf }) {
    return (
        <div className='result' onClick={() => openSelf(result.imdbID)}>
            <img src={result.Poster}/>
            <h4>{result.Title}</h4>
        </div>
    );
}

export default Result;