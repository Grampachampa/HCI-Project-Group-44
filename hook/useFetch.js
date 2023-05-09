import {useState, useEffect} from 'react';
import axios from "axios";
//import TOP_SONGS_API_KEY from '@env';
import { set } from 'react-native-reanimated';
/*
Plan: 

api 1: https://rapidapi.com/theaudiodb/api/theaudiodb => current trending music
Step 1: get current trending songs
Step 2: get artist and song name

api 2: https://rapidapi.com/marindelija/api/youtube-search-results/ => search youtube for song name + artist; get video id
Step 3: search youtube for song name + artist
Step 4: get video id

       https://i.ytimg.com/vi/[videoID]/maxresdefault.jpg -> thumbnail
Step 5: get video thumbnail

play audio: https://www.youtube.com/watch?v=ZYy8w5QmdbM

*/

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const options = {
      method: 'GET',
      url: 'https://theaudiodb.p.rapidapi.com/trending.php/',
      headers: {
        'X-RapidAPI-Key': '056b3adc99mshcf8eab21e757ec4p1dd43ejsn3fd60efa9228',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
      },
      params: {
        country: 'us',
        type: 'itunes',
        format: 'singles'
      }
      
    };

    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setisLoading(false);
        } catch(error) {
            setError(error);
            alert("There was an error, please try again later");

        } finally {
            setisLoading(false);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setisLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};

}