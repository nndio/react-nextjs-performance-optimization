import LogoIcon from "../../assets/stair.svg?react";

import "./Logo.css";

export const Logo = () => {
  return (
    <div className="logo">
      <LogoIcon
        width={16}
        height={16}
        className="logo__icon"
      />

      <span className="logo__text">
        Eats
      </span>
    </div>
  );
};