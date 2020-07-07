import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPosts = () => {

    const { getUserPosts, userPosts } = useContext(PostContext);
    const { id } = useParams();

    useEffect(() => {
        getUserPosts(id)
    }, []);

    if (!userPosts) {
        return null;
    }

    return (

        //mapping over usePosts(userPosts have a state that is set after getUserPosts gets JSONIFIED ) and displaying an instance of a post based on id
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {userPosts.map((post) => (
                        <Post key={post.id} post={post} />

                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPosts