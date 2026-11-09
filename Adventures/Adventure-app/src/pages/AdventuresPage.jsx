import { Link } from "react-router-dom";

const ADVENTURES = [
    {id: '1', title: 'Paintballing with da Bois'},
    {id: '2', title: 'Picknic with the Family'},
    {id: '3', title: 'Hiking Ben Lomond'},
]

function AdventuresPage() {
    return (
        <>
            <h1>Adventures Page</h1>
            <ul>
                {ADVENTURES.map((adventure) => (
                    <li key={adventure.id}>
                        <Link to={`/adventures/${adventure.id}`}>{adventure.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AdventuresPage;