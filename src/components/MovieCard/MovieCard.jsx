import classes from './MovieCard.module.css';

const MovieCard = ({ poster, title }) => {
	return (
		<div className={classes.Card}>
			<img src={poster} alt={title} />
			<h6>{title}</h6>
		</div>
	);
};

export default MovieCard;
