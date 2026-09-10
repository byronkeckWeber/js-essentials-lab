
function PriceTag(props) {

    const basePrice = props.basePrice;

    return (
        <div>
            <p>Base Price: {basePrice}</p>
            <p>Final Price: {(basePrice * 1.15).toFixed(2)}</p>
        </div>
    )
}

export default PriceTag;