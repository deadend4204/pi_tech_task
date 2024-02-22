import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E8ECED",
    color: theme.palette.common.black,
    borderBottom: "1px solid black",
    borderTop: "1px solid #CDD6DB",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: " white",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(status, name, goods, freight, total, cur, base) {
  return { status, name, goods, freight, total, cur, base };
}

const rows = [
  createData(
    <Avatar
      sx={{
        bgcolor: deepOrange[500],
        fontSize: "12px",
        width: "22px",
        height: "22px",
      }}
    >
      N
    </Avatar>,
    "Engineering Co. Ltd",
    " 3,459.70",
    "0.00",
    "3,459.70",
    "EUR",
    "3,811.92"
  ),
  createData(
    <Avatar
      sx={{
        bgcolor: deepOrange[500],
        fontSize: "12px",
        width: "22px",
        height: "22px",
      }}
    >
      N
    </Avatar>,
    "Fintec Co. Ltd - SPARES",
    "4,370.60",
    "0.00",
    "4,370.60",
    "USD",
    "4,370.60"
  ),
];

export default function SuppliesTable() {
  return (
    <TableContainer component={Paper} style={{ marginTop: "10px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Supplier Name</StyledTableCell>
            <StyledTableCell align="right">Goods</StyledTableCell>
            <StyledTableCell align="right">Freight</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">Cur</StyledTableCell>
            <StyledTableCell align="right">Base (USD)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.status}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.goods}</StyledTableCell>
              <StyledTableCell align="right">{row.freight}</StyledTableCell>
              <StyledTableCell align="right">{row.total}</StyledTableCell>
              <StyledTableCell align="right">{row.cur}</StyledTableCell>
              <StyledTableCell align="right">{row.base}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
