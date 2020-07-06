import React, { useRef, useContext } from "react"
import { PostContext } from "../providers/PostProvider";

export const SearchBar = () => {
    const { searchPosts } = useContext(PostContext);


    return (
        < fieldset >
            <div className="form-group">
                <label htmlFor="searchTerms">Search:</label>
                <input onChange={e => searchPosts(e.target.value)}
                    type="text"
                    id="searchTerms"
                    autoFocus
                    className="form-control"
                />
            </div>
        </fieldset >
    )
}
