import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import MovieDetails from '../components/MovieDetails';

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
    return loading? <h3>Loading...</h3> : 
    <MovieDetails bgImage={detail.data.movie.background_image}
        title={detail.data.movie.title}
        year={detail.data.movie.year}
        rating={detail.data.movie.rating}
        runtime={detail.data.movie.runtime}
        genres={detail.data.movie.genres}
        summary={detail.data.movie.description_full}
    />;
}

export default Detail;