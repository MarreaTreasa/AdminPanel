// ReqCard.js
import React from "react";

const ReqCard = ({ number, title, description }) => {
  return (
    <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
      <div className="w-24 h-24 bg-blue-700 rounded-full absolute -right-5 -top-7">
        <p className="absolute bottom-6 left-7 text-white text-2xl">{number}</p>
      </div>
      <div className="fill-red-900 w-12">
        <svg
          width="25"
          height="29"
          viewBox="0 0 25 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.9088 18.7863L16.3555 25.3396L13.7799 22.764L12.3777 24.1662L16.3555 28.144L24.311 20.1884L22.9088 18.7863ZM4.42218 18.1996H10.3888V20.1884H4.42218V18.1996ZM4.42218 14.2218H12.3777V16.2107H4.42218V14.2218Z"
            fill="black"
          />
          <path
            d="M2.43334 2.28844H10.3889V8.25508C10.3889 9.34896 11.2839 10.244 12.3777 10.244H18.3444V16.2106H20.3333V8.25508C20.3333 7.95675 20.2338 7.75786 20.0349 7.55897L13.0738 0.597892C12.875 0.399004 12.6761 0.299561 12.3777 0.299561H2.43334C1.33945 0.299561 0.444458 1.19456 0.444458 2.28844V26.155C0.444458 27.2489 1.33945 28.1439 2.43334 28.1439H9.39442V26.155H2.43334V2.28844ZM12.3777 2.68622L17.9466 8.25508H12.3777V2.68622Z"
            fill="black"
          />
        </svg>
      </div>
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-sm text-zinc-500 leading-6">{description}</p>
    </div>
  );
};

export default ReqCard;
