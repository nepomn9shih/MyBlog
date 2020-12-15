import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import { useState } from "react";
import { useStyles } from '../useStyles'

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = useState("recents")

    const handleChange = (event, newValue) => {
    setValue(newValue)
  }
    return <footer className={classes.footer}>
    <BottomNavigation 
      value={value}
      onChange={handleChange}
      className={classes.footer}
    >
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
    </BottomNavigation>
    <Typography component="p" variant="subtitle1" align="center" color="textSecondary" gutterBottom> 
      разработано Непомнящих Александром в 2020г.
    </Typography>
  </footer>
}

export default Footer