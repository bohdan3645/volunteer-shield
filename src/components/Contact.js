import { Grid, Typography, Box, Container, IconButton } from '@mui/material';
import React from 'react';
import logo from '../img/logo1.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaTiktok } from 'react-icons/fa';

const socialMediaLinks = {
    instagram: 'https://www.instagram.com/volunteershield',
    facebook: 'https://www.facebook.com/ГО-Волонтерський-щит-102930985720345',
    tiktok: 'https://vm.tiktok.com/ZMLQhDuLE'
}

function Contact(props) {
    return (
        <Box 
            sx={{ 
                bgcolor: '#15204f',
                color: 'lightblue' 
            }}>
            <Container maxWidth='lg' sx={{ py: 8 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3 }}>
                    <IconButton href={socialMediaLinks.instagram} target='_blank'>
                        <InstagramIcon fontSize='large' sx={{ color: 'lightblue' }}/>
                    </IconButton>
                    <IconButton href={socialMediaLinks.facebook} target='_blank'>
                        <FacebookIcon fontSize='large' sx={{ color: 'lightblue' }}/>
                    </IconButton>
                    <IconButton href={socialMediaLinks.tiktok} target='_blank'>
                        <FaTiktok style={{ color: 'lightblue', fontSize: '30px' }}/>
                    </IconButton>
                </Box>
                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ maxWidth: 100, minWidth: 70 }}>
                            <Box
                                component='img'
                                src={logo}
                                alt='Volunteer Shield Logo'
                                sx={{
                                    width: 1,
                                    display: 'block'
                                }}
                            >
                            </Box>
                        </Box>
                        <Typography variant='h5'>{props.content.heading.title}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant='body1' sx={{ textAlign: { xs: 'center', md: 'initial' } }}>{props.content.contact_info.phone_number.title}</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'initial' } }}>{props.content.contact_info.phone_number.phone}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='body1' sx={{ textAlign: { xs: 'center', md: 'initial' } }}>{props.content.contact_info.email_address.title}</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'initial' } }}>{props.content.contact_info.email_address.email}</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ bgcolor: '#091440', color: '#4d546c', py: 3 }}>
                <Typography align='center' variant='body1'>Copyright © 2022 Volunteer-shield</Typography>
            </Box>
        </Box>
    );
}

export default Contact;