import { Paper, Typography, Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { BsFillCreditCardFill } from 'react-icons/bs';

function CardNum(props) {

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
        <>
            <Paper sx={{ textAlign: 'center', p: 5, borderRadius: 4, border: '1px solid #8d8dff', boxShadow: '5px 5px 0 5px #8d8dff' }}>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <BsFillCreditCardFill fontSize={30} />
                    <Typography variant='h6'>{props.content.financial_help.bank_card_num.title}</Typography>
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
                            bgcolor: '#fffcea', 
                            py: 2, 
                            px: 4, 
                            borderRadius: 2, 
                            border: 'dashed 2px #6dcff6',
                            fontWeight: 'bold',
                        }}
                    >
                        {props.content.financial_help.bank_card_num.card_num}
                    </Typography>
                    <Button 
                        className='copy_button' 
                        variant='outlined' 
                        size='large' 
                        data-address={props.content.financial_help.bank_card_num.card_num} 
                        onClick={handleSaveToClipBoard}
                    >
                        {props.content.financial_help.copy_button.copy}
                    </Button>
                </Box>
            </Paper>
        </>
    );
}

export default CardNum;