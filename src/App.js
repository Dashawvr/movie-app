import React, {useState, useEffect, createContext} from 'react';
import axios from "axios";

import { Dialog, Button, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import Search from "./Search/Search";
import Results from "./Results/Results";
import Router from "./Router/Router";

import './index.css';
import Result from "./Results/Result";
import {AuthProvider} from "./Auth";


const isDarkMode = true
const DarkThemeContext = createContext(isDarkMode);

function App() {
    const [theme, setTheme] = useState({mode: 'dark'})
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {},
        favorite: []
    })
    const [openDialog, setOpenDialog] = useState(false)

    useEffect( () => {
        setState(prevState => {
            return {...prevState, favorite: JSON.parse(localStorage.getItem('favorite'))?
                    JSON.parse(localStorage.getItem('favorite')): []}
        })
    }, []);



    // const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=64c32911770a2945939d730331517194';
    const apiUrl = 'http://www.omdbapi.com/?apikey=4ee6a962'
    const search = (e) => {
        if (e.key === 'Enter'){
            axios(apiUrl + '&s=' + state.s).then(({ data }) => {
                let results = data.Search;
                setState(prevState => {
                    return {...prevState, results: results}
                })
                // console.log(data);
            });
        }
    }

    const handleInput = (e) => {
        let s = e.target.value;
        setState(prevState => {
            return {...prevState, s: s}
        });
    }

    const openPopup = id => {
        axios(apiUrl + '&i='+ id).then(({ data }) => {
            let result = data;
            // debugger;
            console.log(result);

            setState(prevState => {
                return { ...prevState, selected: result }
            });
        });
    }

    const openSelf = async(id) =>{
        await openPopup(id)
        await setOpenDialog(true)
    }
    const closeSelf = () =>{
        setOpenDialog(false)
    }

    const addToFavorite = (obj) =>{
        const newState = state.favorite;
        const coincidence = newState.find((item) => {
            return item.imdbID === obj.imdbID
        });
        console.log(coincidence);
        if (!coincidence) {
            newState.push(obj)
        }
        setState(prevState => {
            return { ...prevState, favorite: newState }
        });
        localStorage.setItem('favorite', JSON.stringify(state.favorite))
    }



    return (
<AuthProvider>
        <div className='App'>


            <Header/>
            <main>
                <Search handleInput={handleInput} search={search}/>
                <Results>
                    {state.results ? state.results.map(result => (
                        <Result key={result.imdbID} result={result} openSelf={openSelf}/>
                    )) : ''}
                    <Dialog classes={{
                        paper: 'paperDialog',
                        container: 'containerDialog'
                    }}
                            open={openDialog}
                            onClose={closeSelf}>
                        <div className='content'>
                            <h2>{state.selected.Title} <span>{state.selected.Year}</span></h2>
                            <p className='rating'>Rating: {state.selected.imdbRating}</p>
                            <div className='plot'>
                                <img src={state.selected.Poster}/>
                                <p>{state.selected.Plot}</p>
                            </div>
                            <Button variant="contained" onClick={() => addToFavorite(state.selected)}>
                                <FavoriteIcon/>
                            </Button>
                        </div>
                    </Dialog>
                </Results>
            </main>
            <Footer/>
        </div>
</AuthProvider>

    );
}



export default App;



