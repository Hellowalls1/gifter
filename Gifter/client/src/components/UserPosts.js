import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPosts = () => {
    const { post, setUserPost } = useState();
    const { getUserPosts } = useContext(PostContext);
    const { id } = useParams()

    useEffect(() => {
        getUserPosts(id).then(setUserPost);
    }, []);

    if (!post) {
        return null;
    }
    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    <Post post={post} />
                    {/* {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default UserPosts