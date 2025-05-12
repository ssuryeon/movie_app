import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function Detail(){
    console.log('Detail');
    const {id} = useParams()
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovie = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetail(json);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return loading? <h3>loading...</h3> :<img src={detail.data.movie.background_image}></img>;
}

export default Detail;