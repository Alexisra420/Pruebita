import React, {Component} from 'react';
import axios from 'axios';
import {AppBar, Typography, Toolbar} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { blueGrey } from '@material-ui/core/colors';

class ClimaListContainer extends Component{

    state = {
        climaData: []
    }

    
	ciudad = '';
    componentDidMount(){
    const {match}= this.props;
    this.ciudad = match.params.ciudad;
    axios.get('https://appsmx.com.mx/api/test/temperatura.php/'+this.ciudad+'/')
    .then(res =>{
       const climaData = res.data.data;
       console.log(res.data.data);
       this.setState({climaData});

	console.log(res.data.data);
    })
    .catch(error => {
        console.log(error)
    })
   }
   
    render() {

    	const {classes} = this.props;
        const {climaData} = this.state;
	const {match}= this.props;
	var fahrenheit = (1.8*climaData)+32;
        return(
            <div className="App-header-MY">
            <AppBar className={classes.NavColor} position="static">
                <Toolbar variant="dense">
                    <Typography variant="h4" component="p">La temperatura actual en {match.params.ciudad}</Typography>
                </Toolbar>
            </AppBar>
	    <center>
		    <h1>{climaData} °C</h1>
		    <Link to= {'/fh/La temperatura actual en '+match.params.ciudad+' es '+fahrenheit} ><button>
		     <img src={process.env.PUBLIC_URL + '/imagenes/grados.png'} width= '80' alt='temperatura' /></button></Link>
		    <br /><br />
		     <img src={process.env.PUBLIC_URL + '/imagenes/mapa.gif'} width= '400'  alt='temperatura' />
		   </center>
            </div>
        );
	
    }
    
}
export default withStyles({
    NavColor:{
        backgroundColor: '#03326F'
    }
}) (ClimaListContainer);