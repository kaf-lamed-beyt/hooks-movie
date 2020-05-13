import React, { useState } from 'react'

export default function Search(props) {
    const [searchKeyword, setSearchKeyword] = useState('')

    const handleSearchInput = (e) => {
        setSearchKeyword(e.target.value)
    }

    /*
     * This function calls the `setSearchKeyword` state and
     * sets it to an empty string,
     * in turn clearing the search field
     */
    const resetSearchField = (e) => {
        e.preventDefault()
        setSearchKeyword('')
    }

    /* When this is called by the button click,
     * `e.preventDefault()` stops the browser from reloading,
     * and the function starts searching for the
     * keyword(movie-title) provided by the user.
     */
    const startSearching = (e) => {
        e.preventDefault()
        props.search(searchKeyword)
    }

    return (
        <div className="search__base">
            <form className="search">
                <input
                    type="text"
                    value={searchKeyword}
                    onChange={handleSearchInput}
                    className="form__control"
                    placeholder="Type the name of the movie here."
                />
                <div className="search__controllers">
                    <button className="btn" onClick={startSearching}>
                        Search
                    </button>
                    <button className="btn" onClick={resetSearchField}>
                        clear
                    </button>
                </div>
            </form>
        </div>
    )
}
