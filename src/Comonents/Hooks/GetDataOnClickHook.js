import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function GetDataOnClickHook() {
    const inputRef = React.createRef()
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>{
            setPost(response.data)
        }).catch((response)=>{
            console.log(response)
        })
    },[id])

    const getId=()=>{
        setId(inputRef.current.value)
    }

    return (
        <div>

            <input type="text" ref={inputRef}/>
            <button type='button' onClick={getId}>Show Data</button>
            
            {post.title}

        </div>
    )
}
