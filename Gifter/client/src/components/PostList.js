import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";

const PostList = () => {

    //posts is an array of posts
    //get all is the method for all of them 
    const { posts, getAllPosts } = useContext(PostContext); //copnsuming post context from the provider

    useEffect(() => {
        getAllPosts();
    }, []);


    //mapping over and listing all of the posts
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <img src={post.imageUrl} alt={post.title} />
                    <p>
                        <strong>{post.title}</strong>
                    </p>
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;