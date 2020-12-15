import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@material-ui/core";
  import LayersIcon from "@material-ui/icons/Layers";
  import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
  import { useStyles } from '../useStyles'

const ContentCard = (index) => {
    const classes = useStyles();

    return <Grid item key={index} xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardMedia 
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="img title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" gutterBottom>
          Пост блога
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
        <PlayCircleFilledIcon/> Просмотр
        </Button>
        <Button size="small" color="primary">
        <LayersIcon/> Редактировать
        </Button>
      </CardActions>
    </Card>
</Grid>
}

export default ContentCard  