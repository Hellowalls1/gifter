import React, { useRef } from "react"

export const SearchBar = ({ setTerms }) => (
    <fieldset>
        <div className="form-group">
            <label htmlFor="searchTerms">Search:</label>
            <input onChange={e => setTerms(e.target.value)}
                type="text"
                id="searchTerms"
                autoFocus
                className="form-control"
            />
        </div>
    </fieldset>
)