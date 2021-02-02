import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
const Cards = ({datas: {confirmed,recoverd,death,lastUpdate}}) => {
   if(!confirmed){
       return 'loading';
   };
   
    return(
        <div className = 'container'>
            <Grid container spacing={3} justify='center'>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = 'h5'>
                            <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">No of Active Cases of Corona</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant = 'h5'> <CountUp 
                            start={0}
                            end={recoverd.value}
                            duration={2}
                            separator=","
                            /></Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">No of recovery Cases of Corona</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Death</Typography>
                        <Typography variant = 'h5'><CountUp 
                            start={0}
                            end={death.value}
                            duration={2}
                            separator=","
                            /></Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">No of Death Cases of Corona</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;