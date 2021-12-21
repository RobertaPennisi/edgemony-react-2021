import styles from './CreatePost.module.scss'
import { useState, useEffect } from 'react';
import {httpPOST} from '../../libs/http'

const CreatePost = () => {
    const [authorInput, setAuthorInput] = useState("");
    const [imgInput, setImgInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [formPostObj, setFormPostObj] = useState({})

    // const handleAuthorInput = (event) => setAuthorInput(event.target.value);
    // const handleImgInput = (event) => setImgInput(event.target.value);
    // const handleMessageInput = (event) => setMessageInput(event.target.value);
    const handleSendBtn = (event) => {
        event.preventDefault();
        httpPOST('/posts', formPostObj);
        alert("Il post è stato creato");
    };

    useEffect(() => {
        setFormPostObj({
            author: authorInput,
            text: messageInput,
            date: new Date().toISOString(),
            photo: imgInput
        });
    }, [authorInput, imgInput, messageInput]);

    return (
        <div className={styles.createPost}>
            <form>
                <div className={styles.__author}>
                    <input 
                        value={authorInput}
                        onChange={(e) => setAuthorInput(e.target.value)}
                        name='author' 
                        id='author'
                        type="text" 
                        placeholder='Author' 
                        required
                    />
                    
                    <input 
                        value={imgInput}
                        onChange={(e) => setImgInput(e.target.value)}
                        name='img' 
                        id='img'
                        type="text" 
                        placeholder='Image URL' 
                    />
                    
                    <button type='button' onClick={handleSendBtn}>
                        SEND
                    </button>
                </div>

                <textarea 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    name='message' 
                    id='message'
                    cols="30"
                    rows="10"
                    placeholder='Message'
                    required 
                >
                </textarea>
            </form>
        </div>
    );
};

export default CreatePost;