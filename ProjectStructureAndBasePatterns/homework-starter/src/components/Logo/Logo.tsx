import LogoIcon from "../../assets/stair.svg?react";
import "./Logo.css";

export const Logo = () => {
  return (
    <div className="logo">
      <LogoIcon className="logo__icon" width={16} height={16} />
      <span className="logo__text">Eats</span>
    </div>
  );
};