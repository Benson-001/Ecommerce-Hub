import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] bg-white shadow-md px-6">
      <div className="cursor-pointer m-2">
        <img src="/blisslogo1.png" height="150px" width="200px" alt="" />
      </div>
      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="Search products"
          className="p-[15px] border-2 border-[#f096dd] border-solid w-[500px] outline-none rounded-lg mr-[-30px]"
        />

        <FaSearch className="text-[20px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
