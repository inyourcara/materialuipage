import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import AppModule from '../components/AppModule';
import Subscribe from './Subscribe';
import ThreeBox from './ThreeBox';
import Calendar from './Calendar';
import { TextFieldsOutlined } from '@material-ui/icons';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    objectFit:'contain',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    WebkitTextFillColor:'orange',
},
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="black">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          MozOutlineColor="red"
          
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
    
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid item lg={12}item  container spacing={0}>

        <Grid item lg={8} sm={12} xs={12}><h1 ><AppModule /></h1></Grid>
        <Grid item lg={4} sm={12} xs={12}><h1><Subscribe /></h1></Grid>

</Grid>
</TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid item lg={12}item  container spacing={0}>

<Grid item lg={8} sm={12} xs={12}><h1 ><ThreeBox /></h1></Grid>
<Grid item lg={4} sm={12} xs={12}><h1><Subscribe /></h1></Grid>

</Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
<Subscribe/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
