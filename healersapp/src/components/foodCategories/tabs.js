import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Diabetes from "./diabetes";
import pressure from "./pressure";
import Colon from './colon'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Tabs = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "Diabetes",
    1: "pressure",
    2:"Colon"
  };

  const indexToTabName = {
    Diabetes: 0,
    pressure: 1,
    Colon:2
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Diabetes" />
          <Tab label="pressure" />
          <Tab label="Colon" />

        </Tabs>
      </AppBar>
      {selectedTab === 0 && <Diabetes />}
      {selectedTab === 1 && <pressure />}
      {selectedTab === 2 && <Colon />}

    </>
  );
};

export default Tabs;
