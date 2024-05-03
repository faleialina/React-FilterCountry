import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

function HomePage() {
	const [obj, setObj] = useState([])

	async function send() {
		const res = await axios.get('https://restcountries.com/v3.1/all')
		console.log(res.data)
		setObj(res.data)
	}

	useEffect(() => {
		send()
	}, [])

	const result = obj.map(elem => (
		<Link to={`/name/${elem.name.common}`} key={elem.name.common}>
			<div className={style.item}>
				<div className={style.title}>
					<h2>{elem.name.common}</h2>
					<div className={style.flex}>
						<div className={style.img}></div>
						<p>{elem.capital}</p>
					</div>
				</div>
				<div className={style.flexFlafs}>
					<img src={elem.flags?.png} alt='Picture' />
				</div>
			</div>
		</Link>
	))

	return (
		<div>
			<div>{result}</div>
		</div>
	)
}

export default HomePage
