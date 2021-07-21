import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="card-item">
        <img src={item.image} alt={item.title} />
        <div className="text">
          <strong>{item.name}</strong>
          <hr></hr>
          <p>{item.description}</p>
          <p>
            Precio: <span>{item.price}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
