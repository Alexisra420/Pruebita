import React, {Component} from 'react';
import axios from 'axios';
import {AppBar, Typography, Toolbar} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { blueGrey } from '@material-ui/core/colors';

class FList extends Component{
   
    render() {

    	const {classes} = this.props;
	const {match}= this.props;
        return(
            <div className="App-header-MY">
            <AppBar className={classes.NavColor} position="static">
                <Toolbar variant="dense">
                    <Typography variant="h4" component="p">Temperatura en Fahrenheit</Typography>
                </Toolbar>
            </AppBar>
	    <center>
		    <h1>{match.params.grados} °F</h1>
                    <br /><br />
		    <img src={process.env.PUBLIC_URL + '/imagenes/mapa.gif'} width= '450' alt='temperatura' />

		   </center>
            </div>
        );
	
    }
    
}
export default withStyles({
    NavColor:{
        backgroundColor: '#03326F'
    }
}) (FList);