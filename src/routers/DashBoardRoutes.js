import React from 'react'
import { Navbar } from '../components/NavBar'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../containers/marvel/MarvelScreen'
import { HeroeScreen } from '../containers/heroes/HeroeScreen'
import { DcScreen } from '../containers/dc/DcScreen'
import {SearchScreen} from '../containers/Search/Search'

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-5" >
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroid" component={HeroeScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/find" component={SearchScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
