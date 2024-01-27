"use client";

import FileUploadCard from "@/components/FileUploadCard";
import { useState } from "react";
import { ParseResultType, RowDataType } from "@/utils/types";
import DropDownButton from "@/components/DropDownButton";
import DropDownIcon from "@/assets/dropDownIcon";
import SelectTag from "@/components/SelectTag";
import { HeaderStyle } from "@/utils/types";

const UploadPage = () => {
  const [tableData, setTableData] = useState<ParseResultType | null>(null);

  const handleDropDownClick = (rowId: string, selectedTag: string) => {
    if (tableData) {
      const updatedTableData = tableData.tableData.map((row) => {
        if (row.id === rowId && !row["selected tags"].includes(selectedTag)) {
          return {
            ...row,
            "selected tags": [...row["selected tags"], selectedTag],
          };
        }
        return row;
      });

      setTableData((prevTableData) => ({
        ...prevTableData!,
        tableData: updatedTableData,
      }));
    }
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-4">
        <FileUploadCard setTableData={setTableData} />
        {tableData?.tableData && (
          <div className="col-span-4 mt-4 max-h-[417px] overflow-y-auto bg-[#F5F5F5] p-4">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr>
                  {HeaderStyle.map((header, index) => (
                    <th
                      className={`${header.style} p-4 text-left sticky`}
                      key={index}
                    >
                      {header.value}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {tableData.headers.map((header, colIndex) => {
                      const isMultipleValued = Array.isArray(
                        row[header as keyof RowDataType]
                      );
                      const isFirstColumn = colIndex === 0;
                      const isLastColumn =
                        colIndex === tableData.headers.length - 1;

                      const cellContent = () => {
                        if (isMultipleValued) {
                          if (isLastColumn) {
                            return <SelectTag tags={row["selected tags"]} />;
                          }
                          return (
                            <DropDownButton
                              text="Select Tags"
                              icon={<DropDownIcon />}
                              dropDownValues={
                                row[header as keyof RowDataType] as string[]
                              }
                              rowId={row.id}
                              callback={handleDropDownClick}
                            />
                          );
                        } else if (colIndex === 1) {
                          return (
                            <a
                              className="text-blue-400 text-sm font-normal underline"
                              href={`https://${
                                row[header as keyof RowDataType] as string
                              }`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {row[header as keyof RowDataType]}
                            </a>
                          );
                        }
                        return row[header as keyof RowDataType];
                      };
                      const cellClassName = `bg-white p-4 ${
                        isFirstColumn ? "rounded-tl-md rounded-bl-md" : ""
                      } ${isLastColumn ? "rounded-tr-md rounded-br-md" : ""}`;
                      return (
                        <td className={cellClassName} key={colIndex}>
                          {cellContent()}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
