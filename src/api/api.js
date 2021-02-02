import React from 'react';
import axios from 'axios';

export const fetchdata = async (country) => {
    let newUrl = url;
    if(country){
     newUrl = `${url}/countries/${country}`;
    }

    try{
        const response = await axios.get(newUrl);
        const resp = response.data;
        const modData = {
            confirmed: resp.confirmed,
            recoverd: resp.recovered,
            death: resp.deaths,
            lastUpdate: resp.lastUpdate,
        }
        
        return modData;
    }
    catch (error) {

    }
};
const url = "https://covid19.mathdro.id/api";
export const fetchChartData = async () => {
    try{
        const respChrt = await axios.get(`${url}/daily`);
        const chrtData = respChrt.data;
        
        const finalData = chrtData.map((dlydata) => (
            {
                confirmed: dlydata.confirmed.total,
                deaths: dlydata.deaths.total,
                date: dlydata.reportDate,
            }));
        return finalData;
    }
    catch (error) {

    }
}

export const countriess = async () => {
    try{
        const response = await axios.get(`${url}/countries`);
        const contData = response.data.countries;
        const finalCont = contData.map((cont) => cont.name);
        return finalCont;
    }
    catch{

    }
}