import React from 'react';
import './App.css';
import "../components/styles.sass";
import { makeStyles } from '@material-ui/core/styles';

import { Button } from 'antd';
import { Grid } from '@material-ui/core';
import AppBar from '../components/AppBar';
import Block1 from '../components/Block1';
import Block2 from '../components/Block2';

import Tabs from '../components/Tabs';
import Footer from '../components/Footer';




function App() {
  return (
    <>
    <div className="App">
<Grid item lg={12}item  container spacing={0}>
<AppBar />

  <Grid item lg={12} sm={12} xs={12}><h1 ><Block1 /></h1></Grid>
<Grid/>
  <Tabs />






</Grid>


    </div>
    </>
  );
}

export default App;
