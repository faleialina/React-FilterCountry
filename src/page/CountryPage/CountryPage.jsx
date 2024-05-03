import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './style.module.scss'
import axios from 'axios'
import Header from '../companents/Header/Header'

function CountryPage() {
	const { id } = useParams()
	const [data, setData] = useState([])

	async function send() {
		try {
			const res = await axios.get(`https://restcountries.com/v3.1/name/${id}`)
			if (res.length === 0) throw new Error('data missing')
			setData(res.data)
		} catch (error) {
			console.log(error.message)
		}
	}

	useEffect(() => {
		send()
	}, [id])

	const result = data.map(elem => (
		<div className={style.country}>
			<h2>{elem.name.common}</h2>

			<div className={style.info}>
				<img src={elem.flags?.png} alt='Picture' />
				<div className={style.description}>
					<p>population: {elem.population}</p>
					<p>continents: {elem.continents}</p>
					<p>area: {elem.area}</p>
				</div>
			</div>
			<div className={style.city}>
				<div className={style.img}></div>
				<p>{elem.capital}</p>
				<Link to={elem.maps.googleMaps}>maps</Link>
			</div>
		</div>
	))

	return (
		<div>
			<Header />
			<div>{result}</div>
		</div>
	)
}
export default CountryPage
