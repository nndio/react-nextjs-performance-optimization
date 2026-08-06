import { useAutoFocus } from './useAutoFocus.js';
import './Card.css';

export const Card = ({
  id,
  title,
  onTitleChange,
  done,
  onToggle,
  onDelete,
  shouldFocus,
  clearFocus,
}) => {
  const handleTitleChange = (event) => {
    onTitleChange(id, event.target.value);
  };

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    onToggle(id);
  }
};

  const handleTitleBlur = () => {
    if (title === '') {
      onDelete(id);
    }
  };

  const inputRef = useAutoFocus(
    shouldFocus,
    clearFocus
  );

  return (
    <div className="card">
      <input
        className="card__done"
        type="checkbox"
        checked={done}
        onChange={handleCheckboxChange}
        onKeyDown={handleKeyDown}
      />

      <input
        ref={inputRef}
        className="card__title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};