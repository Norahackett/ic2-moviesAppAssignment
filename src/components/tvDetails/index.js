import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// New
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import TvReviews from '../tvReviews'

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const TvDetails = ( {tv}) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false); // New

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tv.overview}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Genres" className={classes.chipLabel} color="primary" />
        </li>
        {tv.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${tv.episode_run_time} min.`} />
        <Chip
          icon={<StarRate />}
          label={`${tv.vote_average} (${tv.vote_count})`}
        />
        <Chip label={`Number of Episodes: ${tv.number_of_episodes}`} />
        <Chip label={`Number of Seasons: ${tv.number_of_seasons}`} />
        <Chip label={`First Air Date: ${tv.first_air_date}`} />
        <Chip label={`Last Air Date: ${tv.last_air_date}`} />
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Production_Countries" className={classes.chipLabel} color="primary" />
        </li>
        {tv.production_countries.map((pc) => (
          <li key={pc.name}>
            <Chip label={pc.name} className={classes.chip} />
          </li>
        ))}
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Seasons Air Dates" className={classes.chipLabel} color="primary" />
        </li>
        {tv.seasons.map((s) => (
          <li key={s.air_date}>
            <Chip label={s.air_date} className={classes.chip} />
          </li>
        ))}
        </Paper>
      </div>
      {/* New */}
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TvReviews tv={tv} />
      </Drawer>
    </>
  );
};
    
export default  TvDetails ;