import GroupTable from "../../Components/GroupTable";
import TableHead from "../../Components/TableHead";

export default function AllGroupTable() {
  return (
    <div className=" bg-white rounded-xl m-4 p-4">
      <TableHead />
      <GroupTable />
    </div>
  );
}
