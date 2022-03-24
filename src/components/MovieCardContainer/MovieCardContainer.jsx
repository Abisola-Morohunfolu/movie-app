import classes from './MovieCardContainer.module.css';

const MovieCardContainer = ({ children, categoryName }) => {
	return (
		<section className={classes.CardContainer}>
			<h3>{categoryName}</h3>
			<div>{children}</div>
		</section>
	);
};

export default MovieCardContainer;
