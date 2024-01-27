import CrossIcon from "@/assets/crossIcon";
import React from "react";

const SelectTag = ({ tags }: { tags: string[] }) => {
  const displayTags = tags.slice(0, 5);
  return (
    <div className="flex items-center gap-2">
      {displayTags.map((tag) => (
        <div
          key={tag}
          className="bg-blue-700 rounded flex items-center justify-between gap-1 p-1 max-w-20 max-h-7"
        >
          <div className="text-[10px] font-semibold text-white">{tag}</div>
          <CrossIcon />
        </div>
      ))}
    </div>
  );
};

export default SelectTag;
