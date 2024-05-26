import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../features/categories/search/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const cartItemsCount = useSelector((store) => store.cart.cartItems.length);
  const savedItemsCount = useSelector((store) => store.cart.savedItems.length);

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="flex flex-wrap justify-evenly p-2 m-2">
      <div>
        <p className="text-blue-700 text-3xl font-bold ">Flipkart</p>
        <p className="text-gray-400 font-semibold">
          Explore <span className="text-yellow-600">Plus➕</span>
        </p>
      </div>

      <input
        placeholder="🔍Search for Products, Brands and more"
        className="w-[70%] border-solid p-5 bg-gray-100 rounded-xl"
        onChange={handleChange}
      />
      <button>🩷Saved({savedItemsCount})</button>
      <button>🛒Cart({cartItemsCount})</button>
      <button className="border-solid rounded-lg text-gray-400">👤Login</button>
    </div>
  );
};

export default Header;
