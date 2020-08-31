import React, { useState } from "react";
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
  const [textValue, changeTextValue] = useState();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4" gutterBottom>
          Chatter
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          Topic
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicWindow}>
            <List>
              <ListItem button>
                <ListItemText primary="topic 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="topic 2" />
              </ListItem>
            </List>
          </div>
          <div className={classes.chatWindow}>
            <div className={`${classes.flex} ${classes.message}`}>
              <Chip avatar={<Avatar>M</Avatar>} label="UserName" />
              <Typography component="p" className={classes.messageText}>
                Hello from Message
              </Typography>
            </div>
            <div className={`${classes.flex} ${classes.message}`}>
              <Chip avatar={<Avatar>M</Avatar>} label="UserName" />
              <Typography component="p" className={classes.messageText}>
                Hello from Message
              </Typography>
            </div>
            <div className={`${classes.flex} ${classes.message}`}>
              <Chip avatar={<Avatar>M</Avatar>} label="UserName" />
              <Typography component="p" className={classes.messageText}>
                Hello from Message
              </Typography>
            </div>
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
