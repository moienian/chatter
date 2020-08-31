import React, { useReducer } from "react";

export const chatContext = React.createContext();

const initialState = {
  topic1: [
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

export default function Store(props) {
  const chatReducer = useReducer(reducer, initialState);
  return (
    <chatContext.Provider value={chatReducer}>
      {props.children}
    </chatContext.Provider>
  );
}
