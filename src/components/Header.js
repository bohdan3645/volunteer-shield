import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../img/logo1.png';

function Header(props) {

    const handleScroll = () => {
        const screenWidth = window.screen.width
        const scroll = (num) => {
            window.scrollTo({ top: num, behavior: 'smooth' });
        }

        if(screenWidth > 0 && screenWidth < 600) {
            scroll(2550);
        } else if(screenWidth >= 600 && screenWidth < 900) {
            scroll(1600);
        } else if(screenWidth >= 900) {
            scroll(1350);
        } 
    }
    return (
        <Box
            sx={{
                bgcolor: '#92d2fe',
                py: 13
            }}  
        >
            <Container maxWidth='lg'>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 3 }}>
                    <Box sx={{ maxWidth: 150 }}>
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
                    <Typography variant="h1" align='center' sx={{ display: { xs: 'none', sm: 'block' } }}>{props.content.heading.title}</Typography>
                    <Typography variant="h1" align='center' sx={{ display: { xs: 'block', sm: 'none' }, fontSize: 35 }}>{props.content.heading.title}</Typography>
                </Box>
                <Container maxWidth='md'>
                    <Typography variant='body1' align='center'>{props.content.heading.subtitle}</Typography>
                </Container>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button 
                        variant='contained' 
                        size='large' 
                        sx={{ 
                            fontSize: { xs: '1.3em', md: '2em'}, 
                            mt: 5, 
                            px: 3,
                            py: 2,
                            borderRadius: 5,
                            transition: 'transform 200ms ease-in',
                            fontFamily: '"Montserrat Alternates"',
                            fontWeight: 700,
                            '&:hover': { 
                                transform: 'scale(102%)',
                            }
                        }} 
                        onClick={handleScroll}
                        >
                            {props.content.heading.button}
                        </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;