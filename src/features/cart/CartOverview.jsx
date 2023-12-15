import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const totalCartPrice = useSelector(getTotalCartPrice);

  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  if (!totalCartQuantity) return null;

  return (
    <div
      className={`flex items-center ${
        isCartPage ? "justify-center" : "justify-between"
      } md:text-base" bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6`}
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 ">
        <span>
          {totalCartQuantity} {totalCartQuantity > 1 ? "PIZZAS" : "PIZZA"}
        </span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      {!isCartPage && <Link to="/cart">Open cart &rarr;</Link>}
    </div>
  );
}

export default CartOverview;
