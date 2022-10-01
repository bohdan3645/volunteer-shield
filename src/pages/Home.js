import React from 'react';
import Header from "../components/Header";
import Assistance from '../components/Assistance';
import Volunteer from '../components/Volunteer';
import FinancialHelp from '../components/FinancialHelp';
import Contact from '../components/Contact';

function Home(props) {

  return (
    <>
      <Header content={props.content} />
      <Assistance content={props.content} />
      <Volunteer content={props.content} />
      <FinancialHelp content={props.content} />
      <Contact content={props.content} />
    </>
  );
}

export default Home;
