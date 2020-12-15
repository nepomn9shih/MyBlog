import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    app: {
      backgroundColor: "darkgray"
    },
    root: { flexGrow: 1 },
    menuButton: { marginRight: theme.spacing(1) },
    title: { flexGrow: 1 },
    mainFeaturesPost: { 
      position: "relative",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
    mainFeaturesPostContent: {
      position: "relative",
      padding: theme.spacing(6),
      marginTop: theme.spacing(8)
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left:0,
      backgroundOverlay: "rgba(0,0,0,.3)"
    },
    mainContent: {
  
    },
    mainButtons: {
  
    },
    cardGrid: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    card: {
  
    },
    cardMedia: {
      paddingTop: "56.25%"
    },
    cardContent: {
      flexGrow: 1
    },
    footer: {
      backgroundColor: "gray"
    }
  }));
