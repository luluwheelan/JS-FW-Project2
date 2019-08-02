import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';

function Destroy(props){
    useEffect(() => {
        Axios.post("/api/beers/destroy", {
            id: props.match.params.id
        });
    }, [props]);

    return <Redirect to="/beers"/>
}

export default Destroy;