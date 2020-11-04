import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GetOneRecordHook() {
  const [post, setPost] = useState({});
  const [id,setId] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      }).catch((response)=>{
          console.log(response)
      });
  },[id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <h2>{post.title}</h2>
    </div>
  );
}
