import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../redux/action/movie.js'
import { useParams,Link } from 'react-router-dom'

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
			<Link to="/">back</Link>
			<img src={`http://image.tmdb.org/t/p/w154/${detailData.backdrop_path}`}/>
			<h5>{detailData.title}</h5>
			<h6>{detailData.release_date}</h6>
			<p>{detailData.overview}</p>
		</div>
		)
	}

export default Detail;