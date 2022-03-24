import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MovieCard from './components/MovieCard/MovieCard';
import MovieCardContainer from './components/MovieCardContainer/MovieCardContainer';
import Navbar from './components/Navbar/Navbar';
import SearchInput from './components/SearchInput/SearchInput';
import { API_URL } from './Config';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [movies, setMovies] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		axios
			.get(`${API_URL}s=avengers&page=1&type=movie`)
			.then((res) => {
				// console.log(res);
				setMovies(res.data.Search);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const onSearchInput = (e) => {
		const searchQuery = e.target.value;
		setSearchTerm(searchQuery);
		if (!searchQuery) return setSearchResult([]);
		const searchResult = movies.filter((movie) => movie.Title.toLowerCase().includes(searchQuery));
		setSearchResult(searchResult);
	};

	return (
		<>
			<Navbar />
			<main>
				<Header />
				<SearchInput onInputChange={onSearchInput} inputValue={searchTerm} />
				{searchTerm !== '' && (
					<MovieCardContainer categoryName={`Search for ${searchTerm}`}>
						{Array.isArray(movies) &&
							movies.length > 0 &&
							searchResult.length > 0 &&
							searchResult.map((movie, index) => (
								<MovieCard
									title={movie.Title}
									key={`${movie.Title}-${index}`}
									poster={movie.Poster}
								/>
							))}
						{searchTerm && searchResult.length === 0 && <h3>No Results found for {searchTerm}</h3>}
					</MovieCardContainer>
				)}
				<MovieCardContainer categoryName="Avengers">
					{Array.isArray(movies) &&
						movies.length > 0 &&
						movies.map((movie, index) => (
							<MovieCard
								title={movie.Title}
								key={`${movie.Title}-${index}`}
								poster={movie.Poster}
							/>
						))}
				</MovieCardContainer>
			</main>
		</>
	);
}

export default App;
