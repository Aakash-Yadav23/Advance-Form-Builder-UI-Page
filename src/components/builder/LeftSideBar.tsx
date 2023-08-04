import React, { useState } from "react";
import SearchComponents from "./SearchComponents";
import TextForm from "./TextForm";
import PassComponents from "./PassComponents";
import { PiTextTLight } from "react-icons/pi";
import { FcImageFile } from "react-icons/fc";

import { LuTextCursor } from "react-icons/lu";
// import { FcImageFile } from "react-icons/fc";
// import { FcImageFile } from "react-icons/fc";

const LeftSideBar = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <SearchComponents placeholder="Search Components" type="text" />

      <div className="flex items-center gap-[10px]">
        <PassComponents title="Heading" icon={<PiTextTLight size={35} />} />
        <PassComponents title="Body" icon={<LuTextCursor size={35} />} />
        <PassComponents title="Image" icon={<FcImageFile size={35} />} />

      </div>
    </div>
  );
};

export default LeftSideBar;
