import './Card.css';

export const Card = ({
  id,
  title,
  imageUrl,
  price, 
  discount
}) => {

  const discountedPrice = discount ? Math.round(price * (1 - discount)) : price;

  return (
    <article className="product-card">
      <img className="product-card__image" src={imageUrl} alt={title} />

      <div className="product-card__price-container">
        {discount ? (
          <>
            <span className="product-card__price product-card__price_with-discount">
              {discountedPrice.toLocaleString()} ₽
            </span>

            <span className="product-card__price product-card__price_without-discount">
              {price.toLocaleString()} ₽
            </span>
          </>
        ) : (
          <span className="product-card__price">
            {price.toLocaleString()} ₽
          </span>
        )}
      </div>

      <h2 className="product-card__title">{title}</h2>
    </article>

  );
};
