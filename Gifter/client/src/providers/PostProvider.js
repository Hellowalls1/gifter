import React, { useState } from "react";

export const PostContext = React.createContext();


//provider makes fetch to api and holds state
export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]); //holding posts

    const getAllPosts = () => {
        return fetch("api/post") //can make fetch requests to relative urls via the "proxy" in package json 
            .then((res) => res.json())
            .then(setPosts);
    };

    const addPost = (post) => {
        return fetch("api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    return (   //value for the provider that we are sending out
        <PostContext.Provider value={{ posts, getAllPosts, addPost }}>
            {props.children}
        </PostContext.Provider>
    );
};