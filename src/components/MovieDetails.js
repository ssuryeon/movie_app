import '../style/MovieDetails.css'

function MovieDetails({bgImage, title, year, rating, runtime, genres, summary}){
    return (
        <div id="detail">
            <img src={bgImage}></img>
            <div id="contents">
                <div id="header">
                    <h1>{title}</h1>
                    <span>({year})</span>
                </div>
                <ul>{genres.map((genre) => <li>{genre}</li>)}</ul>
                <span id="rating">☆ {rating}</span>
                <span id="runtime">{runtime} minutes</span>
                <p>{summary}</p>
            </div>
        </div>
    )
}

export default MovieDetails;