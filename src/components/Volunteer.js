import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import organizationsImage from '../img/organizations.png';
import volunteersImage from '../img/volunteers.png';
import driversImage from '../img/drivers.png';

const options = [
    {
        img: organizationsImage,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSea1W-OFIHsYkCSEgRm-KYUJPaniPXGpRWD5YFmfODNQAsqkg/viewform?usp=sf_link'
    },
    {
        img: volunteersImage,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSe2YonnMepxCR3aRj3TO6MfPEEiLYqUKdbC2OO3Tdm8fTIIZA/viewform?usp=sf_link'
    },
    {
        img: driversImage,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSfaFFANqQS632JhxkncsNHEVs6KR1wl5kOalPMGhK0uVqkw0Q/viewform?usp=sf_link'
    }
]

function Volunteer(props) {
    return (
        <Box 
            sx={{ 
                bgcolor: '#117ce6',
                py: 13 
            }}>
            <Container maxWidth='lg' id='volunteer_forms'>
                <Typography 
                    variant='h2'
                    align='center'
                    sx={{ mb: 5, color: 'white' }}
                >
                    {props.content.volunteer_forms.title}
                </Typography>

                <Grid container spacing={6}>
                    {props.content.volunteer_forms.forms.map((item, index) => {
                        return (
                            <Grid item xs={12} md={4} key={item.title} >
                                <Container maxWidth='xs' disableGutters>
                                    <Card sx={{ maxWidth: 500, borderRadius: 2, boxShadow: '5px 5px 0 5px white', bgcolor: '#c8e2ff', mr: '5px' }} elevation={0}>
                                        <CardMedia
                                            component='img'
                                            src={options[index].img}
                                            alt={item.title}
                                            sx={{
                                                width: 1,
                                                display: 'block',
                                            }}
                                        />
                                        <Box sx={{  p: 1 }}>
                                            <CardContent>
                                                <Typography variant='h5' sx={{ fontWeight: 'bold', mt: -1 }}>{item.title}</Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button 
                                                    href={options[index].link}
                                                    sx={{ 
                                                        fontSize: '1.3em', 
                                                        borderRadius: 3,
                                                        transition: 'transform 200ms ease-in',
                                                        fontFamily: '"Montserrat Alternates"',
                                                        fontWeight: 700,
                                                        '&:hover': { 
                                                            transform: 'scale(102%)',
                                                        }
                                                    }}
                                                    variant='contained' 
                                                    type='button' 
                                                    fullWidth  
                                                >
                                                    {item.button}
                                                </Button>
                                            </CardActions>
                                        </Box>
                                    </Card>
                                </Container>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

export default Volunteer;