import React from 'react';

const SearchResult = ({user}) => {
    return(
    user && (<div>{user.name}</div>)
    )

}

export default SearchResult;