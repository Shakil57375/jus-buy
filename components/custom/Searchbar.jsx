import { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { useShopContext } from "@/app/context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useShopContext();
  const [visible, setVisible] = useState(true);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center transition duration-100">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="search"
        />
        <BiSearch className="w-4" />
      </div>
      <CgClose onClick={() => setShowSearch(false)} className="inline w-3 cursor-pointer" />
    </div>
  ) : null;
};

export default SearchBar;
