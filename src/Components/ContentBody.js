import {
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import ContentCard from "./ContentCard";
import { useStyles } from '../useStyles'

const ContentBody = () => {
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return <>
    <div className={classes.mainContent}>
    <Container maxWidth="md">
      <Typography 
        variant="h2" 
        align="center" 
        color="textPrimary" 
        gutterBottom
      >
        Основной контент
      </Typography>
      <Typography 
        variant="h5" 
        align="center" 
        color="textSecondary" 
        paragraph
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat risus eu libero lobortis, vitae congue quam pretium. Curabitur euismod mauris eu tincidunt condimentum. Fusce. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat risus eu libero lobortis, vitae congue quam pretium. Curabitur euismod mauris eu tincidunt condimentum. Fusce.
      </Typography>
      <div className={classes.mainButtons}>
        <Grid container spacing={5} justify="center">
          <Grid item >
            <Button variant="contained" color="primary">
              Начать
            </Button>
          </Grid> 
          <Grid item >
            <Button variant="outlined" color="primary">
              Подробнее
            </Button>
          </Grid> 
        </Grid>
      </div>
    </Container>
  </div>
  <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing={4} justify="center">
      {cards.map((card, index) => {
        return <ContentCard index={index}/>
      })}
    </Grid>
  </Container>
  </>
}

export default ContentBody 