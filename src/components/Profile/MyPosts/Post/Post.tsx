import React from 'react';
import s from './Post.module.css';


type PropsTypePost = {
    message:string
    likesCount:number
}

const Post:React.FC<PropsTypePost> = (props) => {

    return (
        <div className={s.item}>
            <img src='https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;