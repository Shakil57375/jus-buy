import { CgClose } from "react-icons/cg";
import { useShopContext } from "@/app/context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useShopContext();
  return showSearch  ? (
    <div className="text-center transition duration-100">
      <div className="inline-flex items-end justify-end border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="search"
        />
      </div>
      <CgClose onClick={() => setShowSearch(false)} className="inline w-3 cursor-pointer" />
    </div>
  ) : null;
};

export default SearchBar;
