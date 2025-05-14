import {useState, useEffect} from 'react';
import Movies from '../components/Movies';
import '../style/Home.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data.movies);
        setMovies(json.data.movies);
        setLoading(false);
      })
  }
  useEffect(() => {
    getMovies(); // 리턴값 없이 안에서 함수만 실행, getMovies는 promies를 리턴함
  }, []);
  console.log('home');
  return (
    <div>
      {loading? <h3>Loading...</h3> : <div class='container'>{movies.map(movie => 
      <Movies key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}  
            year={movie.year}    
      />)}</div>}
    </div>
  )
}

export default Home;