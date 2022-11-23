import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type PostType = {
    id:number
    message:string
    likesCount:number
}

type MyPostsProps = {
    posts:Array<PostType>
}


const MyPosts:React.FC<MyPostsProps> = (props) => {

    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        alert(postMessageRef.current?.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={postMessageRef}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;