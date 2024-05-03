import { Link } from 'react-router-dom'
import style from './style.module.scss'
function Header() {
	return (
		<div className={style.wrapper}>
			<div className={style.btn}>
				<Link to={'/'}>come back</Link>{' '}
			</div>
		</div>
	)
}

export default Header
