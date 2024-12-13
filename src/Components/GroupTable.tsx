"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const rows = [
  {
    id: 1,
    groupName: "Turin",
    groupStatus: "Threatened",
    director: "Kathryn Murphy",
    registrationDate: "Dec 13, 1938",
  },
  {
    id: 2,
    groupName: "Burgess",
    groupStatus: "Loop",
    director: "Cody Fisher",
    registrationDate: "Sep 22, 1965",
  },
  {
    id: 3,
    groupName: "Lisbon",
    groupStatus: "Signed",
    director: "Savannah Nguyen",
    registrationDate: "Feb 10, 1998",
  },
  {
    id: 4,
    groupName: "Marseille",
    groupStatus: "Gathering info",
    director: "Ralph Edwards",
    registrationDate: "Aug 11, 1975",
  },
  {
    id: 5,
    groupName: "Rome",
    groupStatus: "Aborted",
    director: "Albert Flores",
    registrationDate: "Oct 12, 2002",
  },
];

const columns: GridColDef[] = [
  { field: "groupName", headerName: "Group Name", width: 150 },
  { field: "groupStatus", headerName: "Group Status", width: 180 },
  { field: "director", headerName: "Director", width: 200 },
  { field: "registrationDate", headerName: "Registration Date", width: 180 },
];

export default function GroupTable() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        // disableSelectionOnClick
      />
    </Box>
  );
}
