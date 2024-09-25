// IdeaCard.js
import React from "react";

const ProductCard = ({ number, title, description }) => {
  return (
    <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
      <div className="w-24 h-24 bg-blue-700 rounded-full absolute -right-5 -top-7">
        <p className="absolute bottom-6 left-7 text-white text-2xl">{number}</p>
      </div>
      <div className="fill-red-900 w-12">
        <svg
          width="52"
          height="55"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M107.175 0.568359L214.35 54.1559V188.125L107.175 241.583L0 188.125V54.1559L107.175 0.568359ZM187.685 59.3086L107.175 19.1179L76.1304 34.5758L156.125 75.0241L187.685 59.3086ZM107.175 99.4992L137.833 84.2989L57.7097 43.8506L26.665 59.3086L107.175 99.4992ZM16.4885 72.7054V177.819L98.9308 219.041V113.927L16.4885 72.7054ZM115.419 219.041L197.862 177.819V72.7054L115.419 113.927V219.041Z" />
        </svg>
      </div>
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-sm text-zinc-500 leading-6">{description}</p>
    </div>
  );
};

export default ProductCard;
