import React, { useReducer } from "react";
import io from "socket.io-client";

export const chatContext = React.createContext();

const initialState = {
  general: [
    { from: "Mohammad", msg: "Salam" },
    { from: "Mike", msg: "Hello" },
    { from: "Arnold", msg: "Hi" },
  ],
  topic2: [
    { from: "Ali", msg: "Salam" },
    { from: "taha", msg: "Salam" },
    { from: "George", msg: "Salam" },
  ],
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECIEVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }],
      };

    default:
      return state;
  }
}

let socket;
function sendChatAction(value) {
  socket.emit("chat message", value);
}

export default function Store(props) {
  const [allChats, dispatch] = useReducer(reducer, initialState);

  if (!socket) {
    socket = io(":3001");

    socket.on("chat message", function (msg) {
      dispatch({
        type: "RECIEVE_MESSAGE",
        payload: msg,
      });
    });
  }

  const user = "Ali" + Math.random(100).toFixed(2);

  return (
    <chatContext.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </chatContext.Provider>
  );
}
