import { Paper, Typography, Box, Button } from '@mui/material';
import { GrPaypal } from 'react-icons/gr';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Paypal(props) {
    return (
        <>
            <Paper sx={{ textAlign: 'center', p: 5, borderRadius: 4, border: '1px solid #8d8dff', boxShadow: '5px 5px 0 5px #8d8dff' }}>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <GrPaypal fontSize={30} />
                    <Typography variant='h6'>{props.content.financial_help.paypal.title}</Typography>
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
                    <Button
                        variant='contained'
                        size='large'
                        fullWidth
                        sx={{
                            maxWidth: 350,
                            fontSize: '1.3em',
                            borderRadius: 3,
                            transition: 'transform 200ms ease-in',
                            fontFamily: '"Montserrat Alternates"',
                            fontWeight: 700,
                            '&:hover': {
                                transform: 'scale(102%)',
                            }
                        }}
                        onClick={() => window.location.href = 'https://www.paypal.com/paypalme/volunteershield?locale.x=en_NO'}
                    >
                        {props.content.financial_help.paypal.button_title}
                    </Button>
                </Box>
            </Paper>
        </>
    )
}

export default Paypal;