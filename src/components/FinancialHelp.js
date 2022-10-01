import React from 'react';
import { Typography, Container, Box, Divider } from '@mui/material';

import Swift from './donationMethods/Swift';
import CardNum from './donationMethods/CardNum';
import Crypto from './donationMethods/Crypto';

function FinancialHelp(props) {

    return (
        <>
            <Box sx={{ bgcolor: '#dff2fa' }}>
                <Container maxWidth='lg' sx={{ pt: 13 }}>
                    <Typography 
                        variant='h2'
                        textAlign='center'
                    >
                        {props.content.financial_help.title}
                    </Typography>
                    <Container maxWidth='md' sx={{ py: 4 }}>
                        <Box sx={{ py: 5 }}>
                            <CardNum content={props.content} />
                        </Box>
                    </Container>
                        <Divider sx={{ borderColor: '#000' }} />
                    <Container maxWidth='md' sx={{ py: 4 }}>
                        <Box sx={{ py: 5 }}>
                            <Swift content={props.content} />
                        </Box>
                    </Container>
                        <Divider sx={{ borderColor: '#000' }} />
                    <Container maxWidth='md' sx={{ py: 4 }}>
                        <Box sx={{ py: 5 }}>
                            <Crypto content={props.content} />
                        </Box>
                    </Container>
                </Container>
            </Box>
        </>
    );
}

export default FinancialHelp;