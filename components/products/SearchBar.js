const SearchBar = ({ setSearchMode, setSearchTerm, searchTerm }) => {

    const changeHandler = (e) => {
        setSearchTerm(e.target.value)

    }

    const submitHandler = (e) => {
        e.preventDefault()
        setSearchMode(true)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="search">Look for a Product </label>
            <input value={searchTerm} onChange={changeHandler} type="text" id="search" />
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar
