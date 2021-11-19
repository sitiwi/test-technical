import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres,getMovie,getDetail } from '../redux/action/movie.js'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
	const dispatch = useDispatch()
	const genreData = useSelector(
		state => state.movie.genresData)
	const movieData = useSelector(
		state => state.movie.movieData)
	const detailData = useSelector(
		state => state.movie.detailData)

	useEffect(() => {
    	dispatch(getGenres())
    	dispatch(getMovie())
    	dispatch(getDetail())
  	}, [dispatch]);

	console.log(movieData)

	return (
		<div>
		<div className="Home">
			<div className="List-genres">
				<Col sm>
				{genreData.map((genre) => ( <button><Link to={`/detail/${detailData.genres}`}>{genre.name}</Link></button>))}
				</Col>
			</div>
			<div>
				<Row className="mx-0">
					{movieData.map((movie) => (
					<Col lg="3" className="card-movie">
						<Link to={`/detail/${movie.id}`}>
							<img src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}/>
							<h5 className="Title">{movie.title}</h5>
							<Row className="Detail">
							    <Col sm>
							    	<h5 className="Rating">{movie.vote_average}</h5>
							    </Col>
							    <Col sm>
							    	<h6 className="Release">{movie.release_date}</h6>
							    </Col>
							</Row>
						</Link>
					</Col>
					))}
				</Row>
			</div>
		</div>
		</div>
	)
}

export default Home;