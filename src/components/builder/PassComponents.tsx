import React from 'react';
import { FiLock } from 'react-icons/fi';

interface PassComponentsProps {
  title: string;
  icon?: React.ReactNode;
}

const PassComponents: React.FC<PassComponentsProps> = ({ title, icon }) => {
  return (
    <div className='flex bg-gray-100 p-[10px] w-[100px] rounded-[12px] cursor-pointer text-blue-900 flex-col items-center justify-center gap-[10px]'>
      {icon && <div className="icon-container text-blue-500">{icon}</div>}
      <span className="title text-sm">{title}</span>
    </div>
  );
};

export default PassComponents;
