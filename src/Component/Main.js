import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../Component/Form';



const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component={Form}/>
        </Switch>
    
    </main>
)

export default Main;
