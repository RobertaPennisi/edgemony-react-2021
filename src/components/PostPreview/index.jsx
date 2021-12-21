import styles from './PostPreview.module.scss'
import { DateTime } from '../DateTime'
import { httpDELETE } from "../../libs/http";
import { useEffect, useState } from 'react/cjs/react.development';


const PostPreview = (props) => {
    const data = props.data || {
        author:'User',
        text: 'lorem ipsum', 
        date: new Date(), 
        photo: 'https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80'
    };

    const [allthePosts, setAllthePosts] = useState(data);

    useEffect(()=> {
        
    }, [])

    const handleDeletePost = () => {
        httpDELETE(`/posts/${props.data.id}`).then(() => {});
        alert(`Post by ${props.data.author} was deleted`);
        window.location.href = "/"; 
    };

    return (
        <article className={styles.post}>

            <button onClick={handleDeletePost}>X</button>

            <h3>{data.author}</h3>

            {data.date ? <DateTime data={data.date} /> : <></>}

            <p>{data.text}</p>

            {data.photo ? <img src={data.photo} alt={data.author}/> : <></>}

        </article>
    )
}

export {PostPreview}