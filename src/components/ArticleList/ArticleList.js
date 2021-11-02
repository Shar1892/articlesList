import Article from '../Article/Article';
import './ArticleList.css';

const ArticleList = ({articles, articleDelete}) => {
	return (
		<section className='articleList'>
			{articles.map((articleData, i) => (
				<Article
					article={articleData}
					key={articleData.id}
					articleDelete={articleDelete}
				/>
			))}
		</section>
	);
};

export default ArticleList;
