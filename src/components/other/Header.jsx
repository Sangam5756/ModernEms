import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="font-semibold text-3xl">Sangam 👋</span>
      </h1>

      <button className="bg-red-600  text-white px-5  text-lg font-medium rounded-md py-1">
        Logout
      </button>
    </div>
  );
};

export default Header;
