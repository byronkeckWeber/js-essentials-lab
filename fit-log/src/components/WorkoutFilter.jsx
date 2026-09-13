function WorkoutFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return(
        <div>
            <label>Filter by Type</label>
            <select  onChange={dropdownChangeHandler} value={props.selected}>
                <option value="All">All</option>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
                <option value="Flexibility">Flexibility</option>
            </select>
        </div>
    );
}

export default WorkoutFilter;