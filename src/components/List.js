import React, {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function List ({ciudadData}) {
    return(

        <Switch>
            
        <Fragment>
        <ul>
            {ciudadData.map((ciudad, index) => {
                return (
                    
                <p key={index}>
                    <Link to= {'/info/'+ciudad} ><br></br><button>
                    <img src={process.env.PUBLIC_URL + '/imagenes/'+ciudad+'.png'} width= '120' alt='temperatura' />
                    <h2>{ciudad}</h2></button></Link>
                </p>
                ); 
            })}
        </ul>
        </Fragment>
        </Switch>
    );
}

export default List;