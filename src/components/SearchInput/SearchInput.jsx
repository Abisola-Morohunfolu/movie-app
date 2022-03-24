import classes from './SearchInput.module.css';

const SearchInput = ({ onInputChange, inputValue }) => {
	return (
		<div className={classes.SearchInput}>
			<label htmlFor="search">Search</label>
			<input type="search" name="search" id="search" value={inputValue} onChange={onInputChange} />
		</div>
	);
};

export default SearchInput;
