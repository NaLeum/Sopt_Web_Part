import React, { useState } from 'react';
import ResponsiveTemplate from '../components/common/ResponsiveTemplate';
import SearchResult from '../components/result/SearchResult';
import InputConatiner from '../containers/input/InputContainer';
import { getRepoApi, getUserApi } from '../lib/api';

const MainPages = () => {
    const [user,setUser]= useState(null);
    const [repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(false);

    const getUser = async(username) => {
        setLoading(true);
        const data = await getUserApi(username);
        const repodata = await getRepoApi(username);
        setRepos(repodata);
        setUser(data);
        setLoading(false);
    }
    return (
        <ResponsiveTemplate>
            <InputConatiner onSubmit={getUser}/>
            <SearchResult user={user} repos={repos} loading={loading}/>
        </ResponsiveTemplate>
    )
}

export default MainPages;