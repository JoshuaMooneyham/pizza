export default function Pizza(pizza) {
    return (
    <li className={pizza.soldOut? 'sold-out pizza': 'pizza'}>
        <img className="pizza-img" src={pizza.photoName} alt={pizza.name}/>
        <div>
            <h3 className="pizza-name">{pizza.name}</h3>
            <p className="pizza-ingredients">{pizza.ingredients}</p>
            <span className="pizza-price">{pizza.soldOut ? 'SOLD OUT' : `$${pizza.price}`}</span>
        </div>
    </li>);
}