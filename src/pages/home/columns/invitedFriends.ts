import type { TableProps } from "antd";

interface DataType {
  key: string;
  id: number;
  walletAddress?: string;
  heart?: string;
}

const invitedFriendsColumns: TableProps<DataType>["columns"] = [
  {
    title: "",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: "10%",
  },
  {
    title: "Wallet Address",
    dataIndex: "walletAddress",
    key: "walletAddress",
    align: "center",
  },
  {
    title: "HEART",
    dataIndex: "heart",
    key: "heart",
    align: "center",
    width: "15%",
  },
];

export { invitedFriendsColumns };
