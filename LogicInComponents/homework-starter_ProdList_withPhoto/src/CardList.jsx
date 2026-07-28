import { Card } from './Card';
import './CardList.css';

export const CardList = ({ list }) => {
  return (
    <ul className="product-list">
      {list.map(({ 
        id,
        title,
        imageUrl,
        price, 
        discount
       }) => {
        return (
          <li key={id} className="product-list__item">
            <Card
              id={id}
              title={title}
              imageUrl={imageUrl}
              discount={discount}
              price={price}
            />
          </li>
        );
      })}
    </ul>
  );
};
