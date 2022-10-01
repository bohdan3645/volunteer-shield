import { Container, Paper, Typography, Grid, Box } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MedicationIcon from '@mui/icons-material/Medication';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const icons = [
    <RestaurantIcon fontSize='large' sx={{ fontSize: 60 }}/>,
    <MedicationIcon fontSize='large' sx={{ fontSize: 60 }}/>,
    <CleanHandsIcon fontSize='large' sx={{ fontSize: 60 }}/>,
    <DirectionsRunIcon fontSize='large' sx={{ fontSize: 60 }}/>,
    <DirectionsCarIcon fontSize='large' sx={{ fontSize: 60 }}/>,
    <AddIcon fontSize='large' sx={{ fontSize: 60 }}/>
];

function Assistance(props) {
    return (
        <Container maxWidth='lg' sx={{ py: 13 }}>
            <Typography 
                variant='h2'
                align='center'
                sx={{ mb: 5 }}
            >
                {props.content.our_assistance.title}
            </Typography>
            <Grid container spacing={3}>
                {props.content.our_assistance.list.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper sx={{ p: 3, borderRadius: 4, border: '1px solid #8d8dff', boxShadow: '5px 5px 0 5px #8d8dff' }} elevation={0}>
                                <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 150 }}>
                                    {icons[index]}
                                    <Typography variant='h6' align='center'>
                                        {item}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
}

export default Assistance;