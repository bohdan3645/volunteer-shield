import { Fab, Box, Typography } from '@mui/material';

function LanguageOptions(props) {

    const handleClick = () => {
        props.switchLanguage();
    };

    return (
        <Box sx={{ position: 'fixed', bottom: 25, right: 25 }}>
            <Fab onClick={handleClick} variant="extended" size="large" color="primary" aria-label="language" sx={{ width: 70, height: 70, borderRadius: '50%' }} >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Typography variant='h6'>{props.lang.toUpperCase()}</Typography>
                </Box>
            </Fab>
        </Box>
    );
}

export default LanguageOptions;