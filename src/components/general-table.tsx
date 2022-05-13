import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread2', 356, 16.0, 49, 3.9),
  createData('Gingerbread3', 356, 16.0, 49, 3.9),
  createData('4Gingerbread', 356, 16.0, 49, 3.9),
  createData('G5ingerbread', 356, 16.0, 49, 3.9),
  createData('Gi6ngerbread', 356, 16.0, 49, 3.9),
  createData('Gin6gerbread', 356, 16.0, 49, 3.9),
  createData('Ging7erbread', 356, 16.0, 49, 3.9),
  createData('Ginge8rbread', 356, 16.0, 49, 3.9),
  createData('Ginger9bread', 356, 16.0, 49, 3.9),
  createData('Gingerb007read', 356, 16.0, 49, 3.9),
  createData('Gingerbrea435d', 356, 16.0, 49, 3.9),
  createData('Gingerb2read', 356, 16.0, 49, 3.9),
  createData('asdasdsa', 356, 16.0, 49, 3.9),
  createData('Gingxzzxerbread', 356, 16.0, 49, 3.9),
  createData('Gingxzzerbread', 356, 16.0, 49, 3.9),
  createData('Gingxcverbread', 356, 16.0, 49, 3.9),
  createData('Gingberbread', 356, 16.0, 49, 3.9),
  createData('Gingverbread', 356, 16.0, 49, 3.9),
  createData('Gingecrbread', 356, 16.0, 49, 3.9),
  createData('Gingexxrbread', 356, 16.0, 49, 3.9),
  createData('Gingerbbbread', 356, 16.0, 49, 3.9),
  createData('Gingewqrbread', 356, 16.0, 49, 3.9),
  createData('Gingerabread', 356, 16.0, 49, 3.9),
  createData('Gingeriibread', 356, 16.0, 49, 3.9),
  createData('Gingerasbread', 356, 16.0, 49, 3.9),
  createData('Gingerboread', 356, 16.0, 49, 3.9),
  createData('Gingerbiread', 356, 16.0, 49, 3.9),
  createData('Gingexcrbread', 356, 16.0, 49, 3.9),
  createData('Gingercxbread', 356, 16.0, 49, 3.9),
  createData('Gingennrbread', 356, 16.0, 49, 3.9),
  createData('Gingerbregrread', 356, 16.0, 49, 3.9),
  createData('Gingerbrmgead', 356, 16.0, 49, 3.9),
  createData('Gingerdsgfdsbread', 356, 16.0, 49, 3.9),
  createData('Gingerxcvbread', 356, 16.0, 49, 3.9),
];

export default function GeneralTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table" className="table-fixed">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">لینک آگهی</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">
                <a href="https://google.com" target="blank">
                  <Button variant="contained" endIcon={<OpenInNewIcon />}>
                    دیدن این آگهی در جابینجا
                  </Button>
                </a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
