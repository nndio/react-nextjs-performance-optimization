import { CardList } from './CardList';
import { products } from "./products";
import './App.css';

export const App = () => {
  const list = products;

  return (
    <div className="app">
      <CardList list={list} />
    </div>
  );
};
