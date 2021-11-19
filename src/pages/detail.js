import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../redux/action/movie.js'
import { useParams,Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Detail = () => {
	const dispatch = useDispatch()
	const detailData = useSelector(
		state => state.movie.detailData)
	const { id } = useParams()
	useEffect(() => {
    	dispatch(getDetail(id))
  	}, [dispatch]);

	console.log(detailData)

	return (
		<div>
			<div>
				<button className="btn"><Link to="/">Back</Link></button>
			</div> 
			<div className="card-detail">
				<div className="gambar">
					<img src={`http://image.tmdb.org/t/p/w154/${detailData.backdrop_path}`}/>
					<h5>{detailData.title}</h5>
					<h6>{detailData.release_date}</h6>
					<p className="text-align"> {detailData.overview}</p>
				</div>
			</div>
		</div>
	)
}

export default Detail;