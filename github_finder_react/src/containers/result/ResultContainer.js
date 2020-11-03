import React from 'react';
import SearchResult from '../../components/result/SearchResult';

const ResultConatiner = ({user,repos,loading}) => {

    return(
        <SearchResult user={user} repos={repos} loading={loading}/>
    )
}

export default ResultConatiner;