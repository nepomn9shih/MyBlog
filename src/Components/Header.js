import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useStyles } from "../useStyles";
import LoginForm from "./LoginForm";

const Header = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return <AppBar>
    <Container fixed>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          area-aria-label="menu"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Модный блог
        </Typography>
        <Box mr={3}>
          <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
            Log in
          </Button>
          <LoginForm handleClose={handleClose} open={open}/>
        </Box>
        <Button color="secondary" variant="contained">
          Sign up
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
}

export default Header  