import React from 'react'


const PageBar = ({ pages, setCurrentPage, currentPage}) => {
    const current = parseInt(currentPage)
    const totalPages = parseInt(pages)

    const setFirstPage = () => {
        setCurrentPage(1)
    }

    const setLastPage = () => {
        setCurrentPage(totalPages)
    }
    
    const setNextPage = () => {
        setCurrentPage(current+1)
    }

    const setPreviousPage = () => {
        setCurrentPage(current -1)
    }
    
    if (pages > 0) {
        return (
            <div>
                <button onClick={setFirstPage}>1</button>
                {current !==1 && current-1 !== 1 && <button onClick={setPreviousPage}>{current - 1}</button>}
                {current !== 1 && current !== totalPages && <button>{current}</button>}
                {current !== totalPages && current + 1 !== totalPages && <button onClick={setNextPage}>{current + 1}</button>}
                {pages> 1 &&<button onClick={setLastPage}>{pages}</button>}
            </div>
        )
    } else {
        return <p>0</p>
    }
    
}

export default PageBar
