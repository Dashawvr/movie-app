import React from 'react';

function Search({handleInput,search}) {


    return (
        <section className='search-wrapper'>
            <input type='text' placeholder='Search...' className='search-box' onChange={handleInput} onKeyPress={search}/>
        </section>
    );

}

export default Search;