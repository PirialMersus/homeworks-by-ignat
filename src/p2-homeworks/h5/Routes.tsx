import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from './pages/Junior-plus';

export const PATH = {
    PRE_JUNIOR: '/pre-jun',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} exact render={() => <PreJunior/>}/>
            <Route path={PATH.JUNIOR} exact render={() => <Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} exact render={() => <JuniorPlus/>}/>
                {/*// add routes*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
