import axios from 'axios';

export const fetchMovies = async (str) => {

    const { data } = await axios.get('https://www.omdbapi.com/?apikey=1c49254a&t=' + str);

    return data
};