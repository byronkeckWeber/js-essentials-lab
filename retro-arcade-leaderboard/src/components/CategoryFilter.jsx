function CategoryFilter(props) {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div>
            <label>Filter by Category</label>
            <select onChange={dropdownChangeHandler} value={props.selected}>
                <option value="All">All Categories</option>
                <option value="Arcade Classic">Arcade Classic</option>
                <option value="Sci-Fi Shooter">Sci-Fi Shooter</option>
                <option value="Indie Title">Indie Title</option>
                <option value="Adventure Game">Adventure Game</option>
            </select>
        </div>
    );
}

export default CategoryFilter;
