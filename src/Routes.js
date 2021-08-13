import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CiudadListContainer from './containers/CiudadList';
import ClimaListContainer from './containers/ClimaList';
import FList from './containers/FList';

const Routes = () => {

    return(
        <Switch>
            <Route exact path='/' component= {Home} />
            <Route path='/ciudades' component={CiudadListContainer} />
            <Route exact path='/info/:ciudad' component={ClimaListContainer} />
            <Route exact path='/fh/:grados' component={FList} />
        </Switch>
    );
}

export default Routes;