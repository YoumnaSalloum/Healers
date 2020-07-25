import React from 'react';
import Grid from '@material-ui/core/Grid';
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
import {Link} from 'react-router-dom'
import IntersetForm from './intresetform'
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
root: {
alignText: "center",
justifyContent:"center",
maxWidth: 400,
},
media: {
height: 0,
paddingTop: '56.25%', // 16:9
},
expand: {
transform: 'rotate(0deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
duration: theme.transitions.duration.shortest,
}),
},
expandOpen: {
transform: 'rotate(180deg)',
},
avatar: {
backgroundColor: red[500],
},
}));
export default function HospitalBill(props) {
const { clases } = props;
const classes = useStyles();
const [expanded, setExpanded] = React.useState(false);
const handleExpandClick = () => {
setExpanded(!expanded);
};
return (
<Grid
container
spacing={5}
direction="column"
alignItems="center"
justify="center"
style={{ minHeight: '100vh' }}
>
<Grid item xs={3}>




<Card>
<Card className={classes.root} >
<CardHeader
avatar={
<Avatar aria-label="recipe" className={classes.avatar}>
</Avatar>
}
action={
<IconButton aria-label="settings">
<MoreVertIcon />
</IconButton>
}
title="Hospital Bill"
subheader=""
/>
<CardMedia
className={classes.media}
// img or video:
image="/static/images/cards/paella.jpg"
title="Paella dish"
/>
<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
Bill amount:
</Typography>
</CardContent>
<CardActions disableSpacing>
{/* <IconButton aria-label="add to favorites">
<FavoriteIcon />
</IconButton> */}
<IconButton aria-label="share">
<ShareIcon />
</IconButton>
<IconButton
className={clsx(classes.expand, {
[classes.expandOpen]: expanded,
})}
onClick={handleExpandClick}
aria-expanded={expanded}
aria-label="show more"
>
<ExpandMoreIcon />
</IconButton>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
<Typography paragraph></Typography>
<Typography paragraph>
</Typography>
<Typography paragraph>
The description of patient health situation 
</Typography>
<Typography paragraph>
Hospital Name 
</Typography>
<Typography>
Hospital Address 
</Typography>
<Typography>
Hospital phone number
</Typography>
<Typography>
<Button color="secondary">    <Link to="/IntersetForm">INTEREST</Link></Button>
</Typography>
</CardContent>
</Collapse>
</Card>
</Card>
</Grid> 
</Grid>
);
}