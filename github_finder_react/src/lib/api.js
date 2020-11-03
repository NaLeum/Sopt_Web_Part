import axios from 'axios';
const client = axios.create({baseURL:'https://api.github.com/users/'})

export const getUserApi = async(username) =>{
    const {data} = await client.get(username);
    console.log(data)

    return data
  }

  export const getRepoApi = async(username) => {
      const {data} = await client.get(`${username}/repos`);
      return data
  }