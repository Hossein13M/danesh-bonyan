import * as React from 'react';
import { useEffect, useState } from 'react';
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

export interface TableInfo {
  company: string;
  link: string;
  title: string;
}

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

export default function GeneralTable(props: Array<TableInfo>) {
  const [tableData, setTableData] = useState<Array<TableInfo>>([]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table" className="table-fixed">
          <TableHead>
            <TableRow>
              <StyledTableCell>نام شرکت</StyledTableCell>
              <StyledTableCell align="right">نام شغلی</StyledTableCell>
              <StyledTableCell align="right">لینک آگهی</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item: TableInfo) => (
              <StyledTableRow key={item.title}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
                </StyledTableCell>
                <StyledTableCell align="right">{item.company}</StyledTableCell>
                <StyledTableCell align="right">
                  <a href={item.link} target="blank">
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
    </>
  );
}
