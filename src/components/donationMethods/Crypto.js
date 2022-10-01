import React, { useEffect } from 'react';
import { Paper, Typography, Box, Grid, Button } from '@mui/material';

import { SiBitcoinsv } from 'react-icons/si';
import { SiEthereum } from 'react-icons/si';
import tether from '../../img/tether.png';


const icons = [ 
    <SiBitcoinsv fontSize={30}/>, 
    <SiEthereum fontSize={30}/>, 
    <div style={{ width: 30, height: 30 }}><img src={tether} alt='tether icon' style={{ width: '100%', display: 'block' }} /></div>
]

function Crypto(props) {

    useEffect(() => {
            const copyButtons = document.querySelectorAll('.copy_button');
            copyButtons.forEach(button => {
                button.textContent = props.content.financial_help.copy_button.copy;
            });    
    }, [props])

    const handleSaveToClipBoard = (e) => {
        const copyButtons = document.querySelectorAll('.copy_button');
        copyButtons.forEach(button => {
            button.textContent = props.content.financial_help.copy_button.copy;
        });
        e.target.textContent = props.content.financial_help.copy_button.copied;
        navigator.clipboard.writeText(e.target.dataset.address);
    }

    return (
        <Grid container spacing={3}>
            {props.content.financial_help.crypto.map((currency, currencyIndex) => {
                return (
                    <Grid item xs={12} key={currencyIndex}>
                        <Paper 
                            sx={{ 
                                textAlign: 'center', 
                                p: 5, 
                                borderRadius: 4, 
                                border: '1px solid #8d8dff', 
                                boxShadow: '5px 5px 0 5px #8d8dff'
                            }}
                        >
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    gap: 3, 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    mb: 3 
                                }}
                            >
                                {icons[currencyIndex]}
                                <Typography variant='h6'>{currency.currency}</Typography>
                            </Box>
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    gap: 3, 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    flexWrap: 'wrap' 
                                }}
                            >
                                <Typography 
                                    variant='body1' 
                                    sx={{ 
                                        wordBreak: 'break-all', 
                                        bgcolor: '#fffcea', 
                                        py: 2, 
                                        px: 4, 
                                        borderRadius: 2, 
                                        border: 'dashed 2px #6dcff6' 
                                    }}
                                >
                                    {currency.address}
                                </Typography>
                                <Button 
                                    className='copy_button' 
                                    variant='outlined' 
                                    size='large' 
                                    data-address={currency.address} 
                                    onClick={handleSaveToClipBoard}
                                >
                                    {props.content.financial_help.copy_button.copy}
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>        
                )
            })
            }
        </Grid>
    );
}

export default Crypto;