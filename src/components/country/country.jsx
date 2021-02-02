import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {countriess} from '../../api/api';
import './country.css';

const Country = ({handleCont}) => {
    const [fetchedCountry, setfetchedCountry] = useState([])

    useEffect(() => {
        const resp = async () => {
            setfetchedCountry( await countriess());
        }
        resp();
        
    },[setfetchedCountry])

    return(
        <div className = "contCountry">
            <FormControl>
                <NativeSelect defaultValue = "" onChange = {(e) => handleCont(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountry.map((cont) => <option key = {cont} value = {cont}>{cont}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
}
export default Country;