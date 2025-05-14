import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../style/Movies.css';

function Movies({id, coverImg, title, year}){
    return (
        <div id='movies'>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} />
            </Link>
            <div id='movie'>
                <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
                <span>{year}</span>
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