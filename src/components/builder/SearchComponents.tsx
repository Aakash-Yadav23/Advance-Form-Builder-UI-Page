'use client'

import React, { ChangeEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from 'framer-motion';

interface SearchComponentProps {
  placeholder: string;
  // value?: string;
  type?: "text" | "number" | "password" | "email";
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchComponents: React.FC<SearchComponentProps> = ({
  type,
  placeholder,
  // onChange,
  // value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const HandleSearch=(e:any)=>{
setValue(e.target.value)
  }
  const handleSearchClick = () => {
    if (!value) {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 800); // Adjust the time for how long you want the shaking animation to last.
    }
    
  };
  return (
    <motion.div
    animate={{
        x: isShaking ? [-10, 10, -10, 0] : 0,
      }}
      className={`flex justify-between border-2 transition delay-150 ease-in h-[40px] px-[10px] items-center border rounded-md ${
        isFocused ? "border-blue-600 " : ""
      }
      ${ isShaking ? 'animate-shake' : ''}
      `}
    >
      <input
        value={value}
        type={type}
        className='h-full outline-none pl-[10px] w-full'
        placeholder={placeholder}
        onChange={(e)=>HandleSearch(e)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <FiSearch
       size={20} 
    
       className={` cursor-pointer ${value ? "text-blue-800":"text-gray-400"}`}
       onClick={handleSearchClick}
      />
    </motion.div>
  );
};

export default SearchComponents;
