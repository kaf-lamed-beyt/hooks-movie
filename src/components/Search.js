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
    const resetSearchField = () => {
        setSearchKeyword('')
    }

    /* When this is called by the button click, 
    `e.preventDefault()` stops the browser from reloading,
    and the function starts searchin for the kwyword provided by the user.
    */
    const startSearching = (e) => {
        e.preventDefault()
        props.search(searchKeyword)
    }

    return (
        <form className="search__base">
            <input
                type="text"
                value={searchKeyword}
                onChange={handleSearchInput}
            />
            <button onClick={startSearching}>Search 🔍 </button>
        </form>
    )
}
