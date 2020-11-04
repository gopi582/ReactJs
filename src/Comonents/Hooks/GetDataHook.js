import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GetDataHook() {
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((exce) => {
        setErrorMessage(exce);
      });
  },[]);
  return <div>
      <ul>
          {
              posts.map(res=>
              <li key={res.id}>{res.title}</li>
              )
          }
      </ul>
        {errorMessage!==null ?errorMessage:null}
  </div>
}
