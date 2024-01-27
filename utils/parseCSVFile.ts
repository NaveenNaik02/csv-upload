import { ParseResultType, RowDataType } from "./types";

export const parseCSVFile = async (file: File): Promise<ParseResultType> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result as string;
      const data = parseCSVString(result);
      resolve(data);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
};

const parseCSVString = (csvString: string) => {
  const rows = csvString.trim().split("\n");
  const headers = rows[0].trim().split(",");
  const tableData = rows.slice(1).map((row) => {
    const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    const rowData: RowDataType = {
      id: "",
      links: "",
      prefix: "",
      "select tags": [],
      "selected tags": [],
    };
    headers.forEach((header, index) => {
      const rowValues = values[index].trim().replace(/"/g, "");
      if (header === "select tags" || header === "selected tags") {
        (rowData[header as keyof RowDataType] as string[]) =
          rowValues === "" ? [] : [...rowValues.split(",")];
      } else {
        (rowData[header as keyof RowDataType] as string) = rowValues;
      }
    });
    return rowData;
  });

  return { headers, tableData };
};
