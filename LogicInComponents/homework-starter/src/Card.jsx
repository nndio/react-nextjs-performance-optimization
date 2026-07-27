import './Card.css';

export const Card = ({
  id,
  title,
  imageUrl,
  price, 
  discount
}) => {

    return (
    <article className="product-card">
      <img className="product-card__image" src={imageUrl} alt={title} />

      <div className="product-card__price-container">
        {price}
      </div>

      <h2 className="product-card__title">{title}</h2>
    </article>

  );
};
