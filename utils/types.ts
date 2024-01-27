export type ParseResultType = {
  headers: string[];
  tableData: RowDataType[];
};

export type RowDataType = {
  id: string;
  links: string;
  prefix: string;
  "select tags": string[];
  "selected tags": string[];
};

export const HeaderStyle = [
  {
    value: "Sl No.",
    style: "w-20",
  },
  {
    value: "Links",
    style: "w-60",
  },
  {
    value: "Prefix",
    style: "w-60",
  },
  {
    value: "Add Tags",
    style: "w-40",
  },
  {
    value: "Selected Tags",
    style: "",
  },
];
