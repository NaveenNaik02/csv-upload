"use client";

import Button from "@/components/Button";
import ExcelSheet from "@/assets/excelSheet";
import UploadButtonIcon from "@/assets/uploadButtonIcon";
import { ChangeEvent, useRef, useState } from "react";
import { parseCSVFile } from "@/utils/parseCSVFile";
import { ParseResultType } from "@/utils/types";

type SetTableDataType = {
  setTableData: (data: ParseResultType | null) => void;
};

const FileUploadCard = ({ setTableData }: SetTableDataType) => {
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // console.log(selectedFile, "selected file");
      setSelectedFileName(selectedFile.name);
      setSelectedFile([selectedFile]);
    }
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFileName("");
    setSelectedFile([]);
    setTableData(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile.length > 0) {
      try {
        const fileData = await parseCSVFile(selectedFile[0]);
        setTableData(fileData);
      } catch (error) {
        console.error("Error parsing csv file", error);
      }
    }
  };

  return (
    <div className="col-span-2 bg-white rounded-lg items-center col-start-2 pt-4 pb-2">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-4 w-[90%] h-80">
          <label
            htmlFor="fileInput"
            className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-4">
              <ExcelSheet />
              {selectedFileName ? (
                <>
                  <p className="text-base text-[#999CA0] font-normal">
                    {selectedFileName}
                  </p>
                  <button
                    className="text-red-500 text-lg"
                    onClick={handleRemove}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <p className="text-base text-[#999CA0] font-normal">
                  Drop your excel sheet here or
                  <span className="text-[#605BFF]"> Browse</span>
                </p>
              )}
            </div>
            <input
              id="fileInput"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleFileInputChange}
              ref={inputRef}
            />
          </label>
          <Button
            text="Upload"
            icon={<UploadButtonIcon />}
            onClick={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUploadCard;
