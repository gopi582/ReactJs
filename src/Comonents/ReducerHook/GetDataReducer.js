import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  isLoading: true,
  posts: {},
  isError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        isLoading: false,
        posts: action.payload,
        isError: "",
      };
    case "FAIL":
      return {
        isLoading: false,
        posts: {},
        isError: "Something Went Wrong",
      };
    default:
      return state;
  }
};

export default function GetDataReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FAIL" });
      });
  },[]);
  return (
    <div>
      {state.isLoading ? 'Loading' : state.posts.title}
      {state.isError ? state.isError : null}
    </div>
  );
}
