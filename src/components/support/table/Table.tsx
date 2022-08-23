import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from 'react-router-dom'
import "../CustomerServicePortal.css" ;

const columns: GridColDef[] = [
  { field: "id", hide: true },
  { field: "name", headerName: "Name", width: 250 },
  { field: "company", headerName: "Company", width: 250, renderCell: (params) => (
    <Link className="businessName" to={`/support/${params.value}`}><p className= "business">{params.value}</p></Link>)},
  { field: "email", headerName: "Email", width: 250 },
  { field: "lastContact", headerName: "Last Date of Contact", width: 250 },

];

export default function Table(props) {
  const [rows, setRows] = React.useState<[object]>([{ id : 0 }]);

  React.useEffect(() => {
    let ourRows : [object]= [{ id : 0 }];
    let list = props.investorList;
    for (let i = 0; i < list.length; i++) {
      ourRows[i] = {
        id: i,
        name: list[i].firstName + " " + list[i].lastName,
        company: list[i].business,
        email: list[i].email,
        lastContact: list[i].contact[list[i].contact.length -1]
      };
    }
    setRows(ourRows);
  }, [props.investorList]);

  return (
    <div id = "tableContainer" style={{ height: "600px", width: "80%" }}>
      <DataGrid
        rows = {rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
