import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../style/Movies.css';

function Movies({id, coverImg, title, summary, genres, year}){
    return (
        <div id='movies'>
            <img src={coverImg} />
            <div id='movie'>
                <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
                <span>{year}</span>
                <p>{summary}</p>
                <ul>{genres.map(genre => <li key={genre} class={genre}>{genre}</li>)}</ul>
            </div>
        </div>
    )
}

Movies.propTypes = {
    id: PropTypes.number,
    coverImg: PropTypes.string.isRequired,
    titles: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movies;