import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 md:justify-evenly">
      <Link to="/" className="tracking-tight sm:tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
