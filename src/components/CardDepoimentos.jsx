import React from 'react'
import { FaGoogle, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const CardDepoimentos = ({ depText, depName }) => {
  return (
    <div className="flex flex-wrap justify-center shadow-lg mx-auto max-w-3xl py-5 group transform duration-500 cursor-pointer">
      <div className="flex flex-col justify-center items-center">

        <div className="flex justify-center gap-2 my-3">
          <FaStar color="CDBCA8" />
          <FaStar color="CDBCA8" />
          <FaStar color="CDBCA8" />
          <FaStar color="CDBCA8" />
          <FaStar color="CDBCA8" />
        </div>
      </div>

      <div className="w-full">
        <div className="px-5">
          <div className="flex justify-center items-center md:gap-5">
            <FaQuoteLeft className="invisible md:visible" size={75} />
            <p className="text-justify leading-6 text-stone-900 text-sm md:text-base">{depText}</p>
          </div>
          <div className="flex flex-row items-center font-medium my-5">
            <FaGoogle size={25} />
            <h2 className="text-sm md:text-base font-bold ml-5 text-pink-800">{depName} - Google Locais</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDepoimentos