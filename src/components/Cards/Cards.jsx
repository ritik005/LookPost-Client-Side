import React from "react";
import {Card, CardActions, CardContent, IconButton, Button, Typography} from "@material-ui/core";
import {Favorite, QuestionAnswerSharp, EditSharp} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 2,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = ({ post: post }) => {
  const classes = useStyles();

  return (
    <div className="container">
      {post.map((post) => (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {post.createdAt}
            </Typography>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {post.tags}
            </Typography>
            <Typography variant="body2" component="p">
              {post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="comment">
              <QuestionAnswerSharp />
            </IconButton>
            <IconButton aria-label="edit">
              <EditSharp />
            </IconButton>
            <Button size="small" color="primary">
              Read more
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
export default Cards;
