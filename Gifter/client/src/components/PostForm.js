import React, { useContext, useRef } from "react"
import { PostContext } from "../providers/PostProvider"

import { Button, Form, Input } from "reactstrap"

export default () => {
    const { addPost } = useContext(PostContext)

    //reference to the DOM through react
    const Title = useRef()
    const ImageUrl = useRef()
    const Caption = useRef()



    const SubmitPost = () => {

        const Post = {
            Title: Title.current.value,
            ImageUrl: ImageUrl.current.value,
            Caption: Caption.current.value,
            UserProfileId: 1,
            DateCreated: new Date()
        }
        //passing the post representation to the functon
        addPost(Post)
    }


    return (
        <div className="container">
            <Form className="Title">
                <h2 className="postForm__title">Add New Gif</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="Title">Gif Title: </label>
                        <Input
                            type="text"
                            id="Title"
                            innerRef={Title}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Location name"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="ImageUrl">Gif Image Address: </label>
                        <Input
                            type="text"
                            id="ImageUrl"
                            innerRef={ImageUrl}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Url..."
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="Caption">Image Caption: </label>
                        <Input
                            type="text"
                            id="Caption"
                            innerRef={Caption}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Enter a caption.."
                        />
                    </div>
                </fieldset>


                <Button onClick={SubmitPost}>Submit</Button>
            </Form>
        </div>
    )

}


