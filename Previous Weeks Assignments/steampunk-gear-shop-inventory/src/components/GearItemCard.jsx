import Card from "./Card";
import PriceTag from "./PriceTag";

function GearItemCard(props) {
    return (
        <Card>
            <h2>{props.name}</h2>
            <p>Category: {props.category}</p>
            <p>Description: {props.description}</p>
            <PriceTag basePrice={props.basePrice} />
        </Card>
    )
}

export default GearItemCard