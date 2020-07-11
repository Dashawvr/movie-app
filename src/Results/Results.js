import React from 'react';
import Result from "./Result";

function Results({ children }) {
    return (
     <section className='results'>
         {/*{results.map( result => (*/}
         {/*    <Result key={result.id} result={result} openPopup={openPopup}/>*/}
         {/*))}*/}
         {children}
     </section>
    );

}

export default Results;