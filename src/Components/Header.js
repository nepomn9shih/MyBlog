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
import { useStyles } from "../useStyles";

const Header = () => {
    const classes = useStyles();

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
          Модный сайт
        </Typography>
        <Box mr={3}>
          <Button color="inherit" variant="outlined">
            Log in
          </Button>
        </Box>
        <Button color="secondary" variant="contained">
          Sign up
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
}

export default Header  