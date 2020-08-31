import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { chatContext } from "../../Store";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  message: {
    marginBottom: "10px",
  },
  messageText: {
    marginLeft: "20px",
  },
  topicWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey",
  },
  chatWindow: {
    width: "70%",
    height: "300px",
    padding: "20px",
  },
  chatBox: {
    flexGrow: "1",
  },
  button: {
    width: "15%",
    marginLeft: "10px",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const [state, dispatch] = useContext(chatContext);
  const topics = Object.keys(state);

  const [textValue, changeTextValue] = useState();
  const [activeTopic, changeactiveTopic] = useState(topics[0]);

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4" gutterBottom>
          Chatter
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicWindow}>
            <List>
              {topics.map((topic) => {
                return (
                  <ListItem
                    button
                    key={topic}
                    onClick={(e) => changeactiveTopic(e.target.innerText)}
                  >
                    <ListItemText primary={topic} />
                  </ListItem>
                );
              })}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {state[activeTopic].map((message, i) => {
              return (
                <div className={`${classes.flex} ${classes.message}`} key={i}>
                  <Chip
                    avatar={
                      <Avatar>{message.from.slice(0, 1).toUpperCase()}</Avatar>
                    }
                    label={message.from}
                  />
                  <Typography component="p" className={classes.messageText}>
                    {message.msg}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            className={classes.chatBox}
            id="outlined-search"
            label="Type Message Here"
            type="text"
            variant="outlined"
            size="small"
            value={textValue}
            onChange={(e) => changeTextValue(e.target.value)}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}
