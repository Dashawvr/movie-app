import React, {useEffect, useState} from 'react';
import Result from "../Results/Result";
import {NavLink} from "react-router-dom";


function Like() {

    const [state, setState] = useState({
        movies: []
    })
    useEffect(() =>{
        setState(prevState => {
            return {...prevState, movies: JSON.parse(localStorage.getItem('favorite'))?
                    JSON.parse(localStorage.getItem('favorite')): []}
        })
    }, [])


    return (
        <div className='add-favorite-wrapper'>
            <NavLink to={'/'}> <button className='btn'>Back....</button> </NavLink>
            <div className='add-favorite'>
            {
                state.movies.map((res)=>{
                    return <Result result={res} openSelf={()=> (console.log(''))}/>
                })
            }
            </div>
        </div>
    );

}

export default Like;