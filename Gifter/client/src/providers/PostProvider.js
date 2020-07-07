import React, { useState } from "react";

export const PostContext = React.createContext();

//bringing in all of the backend methods for interacting with the api/database
//provider makes fetch to api and holds state
export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]); //holding posts

    const getAllPosts = () => {
        return fetch("/api/post") //can make fetch requests to relative urls via the "proxy" in package json 
            .then((res) => res.json())
            .then(setPosts);

    };

    const searchPosts = (query) => {
        debugger
        return fetch(`/api/post/search?q=${query}`)
            .then((res) => res.json())
            .then(setPosts);
    };


    const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };



    const getPost = (id) => {
        return fetch(`/api/post/${id}`).then((res) => res.json());
    };

    //bringing in the get posts by user id from back end
    const getUserPosts = (id) => {
        return fetch(`/api/post/getbyuser/${id}`).then((res) => res.json());
    }

    return (   //value for the provider that we are sending out
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts, getPost, getUserPosts }}>
            {props.children}
        </PostContext.Provider>
    );


};