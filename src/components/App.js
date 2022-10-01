import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Home from '../pages/Home';
import LanguageOptions from './LanguageOptions';

import ua from "../content/ua";
import eng from '../content/eng';

const pageLanguages = {
  ua: ua,
  eng: eng,
};

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Montserrat Alternates"',
      fontWeight: 700,
      fontSize: 75
    },
    h2: {
      fontFamily: '"Montserrat Alternates"',
      fontWeight: 700,
      fontSize: 45,
    },
    h6: {
      fontFamily: '"Montserrat Alternates"',
      fontWeight: 700,
      fontSize: 25,
    },
    h5: {
      fontFamily: '"Montserrat Alternates"',
      fontWeight: 700,
      fontSize: 30,
    },
    body1: {
      fontWeight: 300,
      fontSize: 22
    }
  }
});

theme = responsiveFontSizes(theme);


function App() {


  const [pageContentLanguage, setPageContentLanguage] = useState('ua');
  const content = pageLanguages[pageContentLanguage];

  useEffect(() => {
    const userLanguage = window.navigator.language;
    if (userLanguage === 'en-US') {
      setPageContentLanguage('eng');
    }
  }, [])

  const handleSwitchLanguage = () => {
    setPageContentLanguage(prev => {
      if (prev === 'ua') {
        return 'eng';
      } else {
        return 'ua'
      }
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Home content={content} />
      <LanguageOptions lang={pageContentLanguage} switchLanguage={handleSwitchLanguage} />
    </ThemeProvider>
  );
}

export default App;
