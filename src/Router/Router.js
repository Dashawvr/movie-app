import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Like from "../Like/Like";
import App from "../App";

export function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/' exact>
                    <App/>
                </Route>
                <Route path="/like" >
                    <Like/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

