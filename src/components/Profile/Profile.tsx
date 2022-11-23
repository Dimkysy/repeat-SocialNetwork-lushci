import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PostType = {
    id:number
    message:string
    likesCount:number
}

type ProfileProps = {
    posts:Array<PostType>
}

const Profile:React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts  posts = {props.posts}/>
        </div>
    )
}

export default Profile;