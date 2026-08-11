import { ChangeEvent } from "react";
import "./Search.css";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Search = ({ value, onChange }: SearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="search">
      <span className="search__icon">⌕</span>

      <input
        className="search__input"
        type="search"
        placeholder="Search for restaurants"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};