import './Article.css';

const Article = ({article, articleDelete}) => {
	const handleDeleteArticle = () => {
		articleDelete(article.id);
	};

	const fixMonthNumber = (month) => {
		return month < 9 ? `0${month + 1}` : `${month + 1}`;
	};

	const fixMonthDayNumber = (day) => {
		return day < 10 ? `0${day}` : `${day}`;
	};

	let rawArticleDate = new Date(article.date);

	let formattedArticleDate = `${rawArticleDate.getFullYear()}-${fixMonthNumber(
		rawArticleDate.getMonth()
	)}-${fixMonthDayNumber(rawArticleDate.getDate())}`;

	return (
		<div className='article'>
			<div className='article__container'>
				<h2 className='article__title'>{article.title}</h2>
				<p className='article__date'>{formattedArticleDate}</p>
			</div>
			<button
				className='article__delete-button'
				type='button'
				onClick={handleDeleteArticle}
			></button>
		</div>
	);
};

export default Article;
