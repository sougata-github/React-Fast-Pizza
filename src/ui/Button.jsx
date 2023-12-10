/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 text-sm",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full border-[0.5px] border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-200  hover:text-stone-800 focus:outline-none focus:text-stone-800 disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-3.5 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
