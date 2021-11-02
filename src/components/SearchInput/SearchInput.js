import {useState} from 'react';

import './SearchInput.css';

const SearchInput = ({searchArticle, dropeSearchQuery}) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleInputChange = (evt) => {
		setSearchQuery(evt.target.value);
	};

	const handleSearchArticle = () => {
		if (searchQuery) {
			searchArticle(searchQuery);
		}
	};

	const handleDropeSearchQuery = () => {
		if (searchQuery) {
			dropeSearchQuery();
			setSearchQuery('');
		}
	};

	return (
		<div className='search__container'>
			<input
				type='text'
				placeholder='Укажите название'
				className='search'
				onChange={handleInputChange}
				value={searchQuery}
			/>
			<button
				className='search__drope-button'
				type='button'
				onClick={handleDropeSearchQuery}
			></button>
			<button
				className='search__button'
				type='button'
				onClick={handleSearchArticle}
			>
				Найти
			</button>
		</div>
	);
};

export default SearchInput;
