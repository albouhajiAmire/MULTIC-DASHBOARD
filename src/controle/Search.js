import React from 'react'
function Search() {
  return (
    <>
             <div className="search-bar">
                <form
                  className="search-form d-flex align-items-center"
                  method="POST"
                  action="#"
                >
                  <input
                    type="text"
                    name="query"
                    placeholder="Search"
                    title="Enter search keyword"
                  />
                  <button type="submit" title="Search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
    </>
  )
}

export default Search