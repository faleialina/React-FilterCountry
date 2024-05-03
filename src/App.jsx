import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage/HomePage'
import CountryPage from './page/CountryPage/CountryPage'

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<HomePage />} />
				<Route path={'/name/:id'} element={<CountryPage />} />
			</Routes>
		</>
	)
}

export default App
