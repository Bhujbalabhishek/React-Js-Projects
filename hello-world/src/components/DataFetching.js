import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {

    const [post, setPost] = useState({})

    const [id,setId] = useState(1)

    const[idFromButton, setIdFromButton] = useState(1)

     const handleChange = () => {
        setIdFromButton(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res =>{
            console.log(res);
            setPost(res.data)
            
        })
        .catch(err =>{
            console.log(err);
            
        })
    }, [idFromButton])
        return (
        <div>
            <input type="text" value={id} onChange={e =>{setId(e.target.value)}} />

            <button type="button" onClick={handleChange}>Fetch data</button>
            {/* <ul>
                {
                    posts.map(post =>
                        (
                        <li key= {post.id}> {post.title} </li>
                        ))
                }
            </ul> */}

            {post.title}
            
        </div>
    )
}

export default DataFetching
