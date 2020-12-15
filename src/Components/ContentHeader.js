import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useStyles } from '../useStyles'

const ContentHeader = () => {
    const classes = useStyles();

    return <Paper
    className={classes.mainFeaturesPost}
    style={{backgroundImage: "url(https://source.unsplash.com/random)"}}
    >
      <Container fixed>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom //отступ снизу
              >
                Заголовок блога
              </Typography>
              <Typography
                variant="h5"
                color="inherit"
                paragraph //отступ снизу
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat risus eu libero lobortis, vitae congue quam pretium. Curabitur euismod mauris eu tincidunt condimentum. Fusce.
              </Typography>
              <Button variant="contained" color="secondary">
                Подробнее
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
}

export default ContentHeader 