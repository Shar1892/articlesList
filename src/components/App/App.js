import {useState, useEffect} from 'react';

import './App.css';
import ArticleList from '../ArticleList/ArticleList';
import SearchInput from '../SearchInput/SearchInput';

function App() {
	const [articles, setArticles] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	//беру стартовый список статей из json
	const getStartArticlesList = () => {
		fetch('./articles.json')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				setArticles(Object.values(data));
				localStorage.setItem('articles', JSON.stringify(Object.values(data)));
			});
	};

	useEffect(() => {
		getStartArticlesList();
	}, []);

	//по id нахожу удаляемую статью, создаю новый массив без неё
	const handleArticleDelete = (articleId) => {
		let newArticles = articles.filter((article) => {
			return article.id !== articleId;
		});

		localStorage.setItem('articles', JSON.stringify(newArticles));
		setArticles(newArticles);
	};

	//ищу по вхождению запроса в заголовок каждой статьи
	const handleSearchArticle = (searchQuery) => {
		let lowerSearchQuery = searchQuery.toLowerCase();
		let allArticles = JSON.parse(localStorage.getItem('articles'));

		let findArticles = [];

		allArticles.forEach((article) => {
			let loverArticleTitle = article.title.toLowerCase();
			if (~loverArticleTitle.indexOf(lowerSearchQuery)) {
				findArticles.push(article);
			}
		});
		setArticles(findArticles);
		setIsSearching(true);
	};

	//сбрасываю результаты поиска
	const handleDropeSearchQuery = () => {
		let allArticles = JSON.parse(localStorage.getItem('articles'));
		setArticles(allArticles);
		setIsSearching(false);
	};

	//вывожу стартовый список статей из json
	const handleShowStartArticlesList = () => {
		getStartArticlesList();
	};

	return (
		<div className='app'>
			<SearchInput
				searchArticle={handleSearchArticle}
				dropeSearchQuery={handleDropeSearchQuery}
			/>
			<ArticleList articles={articles} articleDelete={handleArticleDelete} />
			<button
				className={`app__button ${isSearching ? 'app__button_invisible' : ''}`}
				onClick={handleShowStartArticlesList}
			>
				Отобразить стартовый список
			</button>
		</div>
	);
}

export default App;
