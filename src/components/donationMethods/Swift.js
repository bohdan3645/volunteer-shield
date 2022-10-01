import React, { useEffect, useState } from 'react';
import { TableContainer, Typography, Paper, TableRow, Table, TableBody, TableCell, Grid, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Swift(props) {


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
        <Grid container>
            {props.content.financial_help.bank_account_details.map((bankDetails, index) => {
                return (
                    <Grid item xs={12} key={index}>
                        <Accordion sx={{ p: 3, border: '1px solid #8d8dff', boxShadow: '5px 5px 0 5px #8d8dff' }}>
                            <AccordionSummary sx={{ height: 100 }} expandIcon={<ExpandMoreIcon fontSize='large'/>}>
                                <Typography variant='h6'>
                                    {bankDetails.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                                <Table>
                                    <TableBody>
                                        {bankDetails.details.map((bankDetailRow, index) => {
                                            return (
                                                <TableRow key={index} sx={{ bgcolor: index % 2 === 0 ? '#f0f9fe' : '#f8fdff' }}>
                                                    <TableCell sx={{ fontSize: '1.3em', fontWeight: 'bold' }}>{bankDetailRow.field_name}:</TableCell>
                                                    <TableCell sx={{ fontSize: '1.3em' }}>{bankDetailRow.particular}</TableCell>
                                                    <TableCell>
                                                        <Button 
                                                            className='copy_button' 
                                                            variant='outlined' 
                                                            data-address={bankDetailRow.particular} 
                                                            onClick={handleSaveToClipBoard}
                                                        >
                                                            {props.content.financial_help.copy_button.copy}
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default Swift;
